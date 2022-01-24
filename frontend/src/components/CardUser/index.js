import React from 'react';
import { Container } from './styles';
export default function CardUser({ user , color} ) { 
  return (
    <>
    <Container  src={user.avatar_url} color={color} >
      <header></header>
      <footer>
         <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </footer>
    </Container>
    </>
  );
}
