import React from 'react';
import { Container, Card } from './styles';

export default function MatchAlert({ margin }) {
  return (
    <Container margin={margin}>
      <Card />
      <span>start giving matches</span>
      <p>Matches will appear here when you start liking people.</p>
    </Container>
  );
}