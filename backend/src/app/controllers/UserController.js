import User from '../models/User';
import axios from 'axios';
import { Op, Sequelize } from 'sequelize';
import Like from '../models/Like';
import Dislike from '../models/Dislike';
import { match } from 'sucrase/dist/parser/tokenizer';
const { Op } = require("sequelize");

class UserController {
  async index(request, response) {
    try {
      const myId = request.params.id;

      let likedUsers = await Like.findAll({
        where: { user_emmiter: myId },
        attributes: ['user_receive'],
      });
      console.log(likedUsers);
      let dislikedUsers = await Dislike.findAll({
        where: { user_emmiter: myId },
        attributes: ['user_receive'],
      });


      likedUsers = likedUsers.map((item) => item.user_receive);
      dislikedUsers = dislikedUsers.map((item) => item.user_receive);

      const totalUsers = likedUsers.concat(dislikedUsers);

      const users = await User.findAll({
        where: {
          [Op.and]: [
            { id: { [Op.ne]: myId } },
            { id: { [Op.notIn]: totalUsers } },
          ],
        },
        attributes: ['id', 'name', 'username', 'bio', 'html_url', 'avatar_url', 'interests', 'locations']
      });

      return response.json(users);
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Unexpected error fetching users.' });
    }
  }

  async user(request, response) {
    try {
      const { username } = request.body;

      if (!username) {
        return response.status(400).json({ error: 'Username is required.' });
      }

      const user = await User.findOne({ where: { username } });
      console.log();

      if (!user) {
        const url = `https://api.github.com/users/${username}`;

        try {
          const getUser = await axios.get(url);
          const { name, bio, avatar_url, html_url } = getUser.data;

          const newUserRegister = await User.create({
            name,
            username,
            bio,
            avatar_url,
            html_url,
          });

          return response.status(201).json(newUserRegister);
        } catch (error) {
          console.log(error);
          return response
            .status(404)
            .json({ error: 'This user does not exist.' });
        }
      }

      return response.json(user);
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Unexpected error signing in.' });
    }
  }
  async Signup(request, response){
    try{
        const newUserData = {};
        Object.assign(newUserData, request.body);
        newUserData.interests = request.body.interests.toString();
        newUserData.locations = request.body.locations.toString();
        
        const newUserRegister = await User.create(newUserData);
        console.log(newUserData);
        console.log(newUserRegister);
        return response.status(201).json(newUserRegister);
    }
    catch(e){
      console.log(e);
      return response
        .status(500)
        .json({ error: 'Unexpected error signing in.' });
    }
  }
  async getLikedUsers(request, response){
    try {
      console.log(request.body);
      let userId = request.body.id;
      let matchedUsersId = await Like.findAll({ 
        where: {
         [Op.and]: [{user_receive : userId}, {is_match: 1}]
        },
        attributes: ['user_emmiter']
      })
      let matchedUsers = [];
      matchedUsersId.forEach((Element)=>{
        matchedUsers.push(Element.dataValues.user_emmiter);
      }) 
      const result = await User.findAll({
        where: {
          id: matchedUsers
        },
      })
      return response.json(JSON.stringify(result));
    
    }catch(e){
      console.log(e);
      return response.json({"message": "No data Found"})
    }
  }
}

export default new UserController();
