import React from 'react';
import { Container } from './styles';
import 'react-tippy/dist/tippy.css';
import {
  Tooltip,
} from 'react-tippy';
  



export default function CardUser({ user }) {
  function interestParser(user){
    const string = user.interests;
    if(string==="None")
      return ''; 
    const array = string.split(",");
    return user.name + " is interested in " + array;
  }
  
  return (
    <Tooltip title={interestParser(user)} position="right">
    <Container  src={user.avatar_url}>
      {/* <Tooltip title={user.name}/> */}
      <header></header>
      <footer>
    
         <h2>{user.name}</h2>
        <p>{user.bio}</p>
        
      </footer>
      
    </Container>
    </Tooltip>
  );
}
