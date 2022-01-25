import React, { useState, useEffect, useReducer } from 'react';
import TinderCard from 'react-tinder-card';
import { useAuth } from '../../contexts/user';
import axios from '../../services/api';
import io from 'socket.io-client';
import altUserImage from '../../assets/altuser.jpg';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';



import HeaderWeb from '../../components/HeaderWeb';
import HeaderMobile from '../../components/HeaderMobile';
import CardUser from '../../components/CardUser';
import MatchModal from '../../components/MatchModal';




import { Container, CardContainer, EndUsers } from './styles';


export default function Main() {
  const ip =  'localhost';
  const path = 'http://' + ip + ':5000';
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [matchUser, setMatchUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  
    
 
  //fetch data on API
  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get(`/users/${user.id}`);
      setUsers(response.data);
    }
    loadUsers();
  }, [user.id]);

  //connects to the server via sockets
  useEffect(() => {
    const socket = io(path, {
      query: { user: user.id },
    });
    socket.on('match', (user) => {
      setMatchUser(user);
      setNotifications([user, ...notifications]);
    });
  }, [user.id, notifications]);

  function handleSwipeAction(direction) {
    if (direction === 'up' || direction === 'down') return;
    const oldUsers = users;
    const lastUser = oldUsers.pop();
    setTimeout(() => {
      setUsers([...oldUsers]);
    }, 200);
    
    direction === 'left'
      ? handleDislikeUser(lastUser.id)
      : handleLikeUser(lastUser.id);
  }

  async function handleLikeUser(userId) {
    await axios.post(`/likes/${user.id}/${userId}`);
  }

  async function handleDislikeUser(userId) {
    await axios.post(`/dislikes/${user.id}/${userId}`);
  }

  function handleCloseMatchModal() {
    setMatchUser(false);
  }
  function interestParser(user){
    const string = user.interests;
    if(string==="None")
      return 'No interests informed by ' + user.name ; 
    const array = string.split(",");
    return user.name + " is interested in " + array;
  }
  function matchingMatrix(lastUser, loggedUser){
  let lastUserParams = 0;
  let loggedUserParams = 0; 
  let percentage = 0; 
  let loggedUserArray = interestsLocationsToArray(loggedUser);
  let lastUserArray = interestsLocationsToArray(lastUser);
  loggedUserArray.forEach(element => {
    if(lastUserArray.includes(element)){
      lastUserParams++;
    } 
    loggedUserParams++;
  }); 
  percentage = (lastUserParams/loggedUserParams) * 100;
  percentage = (percentage>=100)? 100 : Math.floor(percentage);
  return colorMapper(percentage);  
  }
  function interestsLocationsToArray(user){
    let interests = user.interests.split(",");
    let locations = user.locations.split(",");
    return interests.concat(locations);
  }
  function colorMapper(percentage){
    if(percentage<=20)
      return {percentage: percentage, color: "red"};
    else if(percentage>20 && percentage<=40)
      return {percentage: percentage, color: "orange"};
    else if(percentage>40 && percentage<=60)
      return {percentage: percentage, color: "yellow"};
    else if(percentage>60 && percentage<=80)
      return {percentage: percentage, color: "limegreen"};
    return {percentage: percentage, color: "green"};     
  }
 

  
  
  return (
    <>
    <Container>
      <HeaderMobile user={user} />
      <HeaderWeb notifications={notifications} user={user} />


      
      
      {users && (
          <CardContainer>
            {users.map((cardUser) => (
              <>
                <TinderCard style={{"color": "red"}}
                  className="swipe"
                  key={cardUser.id}
                  onSwipe={handleSwipeAction}
                  preventSwipe={['up', 'down']}> 
                  <Tooltip size ="big" 
                  title = {interestParser(cardUser) + " and is a "+ matchingMatrix(cardUser, user).percentage + "% match \n" } 
                  position="right">
                  <CardUser user={cardUser} color = {matchingMatrix(cardUser, user).color}/>
                  </Tooltip>                 
                </TinderCard>
              </>
              ))
            }
            
            
              
            {users.length === 0 && (
              <EndUsers>{
                user.avatar_url? (<img src={user.avatar_url} alt=""/>) : (<img src={altUserImage} alt=""/>)
                }
                
                <p>There are no more users to show :(</p>
              </EndUsers>
            )}
          </CardContainer>
      )}
      {matchUser && (
        <MatchModal onClose={handleCloseMatchModal} user={matchUser} />
      )}
    </Container>
    
    </>
  );
}
