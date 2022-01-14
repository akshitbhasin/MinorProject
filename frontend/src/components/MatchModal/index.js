import React from 'react';
import match from '../../assets/Match1.svg';
import { Container, Content, Profile, Link } from './styles';
import Confetti from '../Confetti/index';
import altUserImage from '../../assets/altuser.jpg';

export default function Match({ onClose, user }) {
  const firstName = user.name.split(' ')[0];

  return (
    <Container>
      <Content>
        <img id="match-icon" src={match} alt="match" />
        <p>You and {firstName} matched with each other</p>
        {user.avatar_url?(<Profile src={user.avatar_url} alt="username" />)
         : (<Profile src={altUserImage} alt="username" />)}
        
        <p>Reach {firstName} By: </p>
        <Link href={user.html_url} target="_blank">
          Visit Github
        </Link>
        <Link href={user.html_url} target="_blank">
          Email
        </Link>

        <button onClick={onClose}>Close</button>
        <Confetti/>
      </Content>
    </Container>
  );
}
