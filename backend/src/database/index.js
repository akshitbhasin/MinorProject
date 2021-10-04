import Sequelize from 'sequelize';
import dbConfig from '../config/database';
const userDB = require('./migrations/20200811213129-user');
const likesDB = require('./migrations/20200815231037-like-user');
const dislikeDB = require('./migrations/20200816143728-dislike-user');
const { DataTypes } = require('sequelize');


import User from '../app/models/User';
import Like from '../app/models/Like';
import Dislike from '../app/models/Dislike';



const connection = new Sequelize('mysql://root:root@localhost:3306/testing');
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const users = userDB.userDB(connection);
const likes = likesDB.likesDB(connection);
const dislies = dislikeDB.dislikesDB(connection);
User.init(connection);
Like.init(connection);
Dislike.init(connection);

export default connection;
