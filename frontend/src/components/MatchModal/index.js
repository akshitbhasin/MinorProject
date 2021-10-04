import React from 'react';
import match from '../../assets/match.svg';
import { Container, Content, Profile, Link } from './styles';

export default function Match({ onClose, user }) {
  const firstName = user.name.split(' ')[0];

  return (
    <Container>
      <Content>
        <img id="match-icon" src={match} alt="match" />
        <p>You and {firstName} matched with each other</p>
        <Profile src={user.avatar_url} alt="username" />
        <p>Visit {firstName}'s' profile on Github</p>
        <Link href={user.html_url} target="_blank">
          Visit Github
        </Link>
        <button onClick={onClose}>Close</button>
      </Content>
    </Container>
  );
}
