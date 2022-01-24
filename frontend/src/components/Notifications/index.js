import React from 'react';
import { Container } from './styles';
import altUserImage from '../../assets/altuser.jpg';


export default function Notifications({ user }) {
  let link = user.html_url? user.html_url : user.email;
  let imgUrl = user.avatar_url? user.avatar_url : altUserImage;
  console.log(user);

  return (
    <Container>
      <img src={imgUrl} alt="" />
      <span>
        You Matched With <a  style={{color: "#05b4ff", textDecoration: "none"}} href={link}><strong>{user.name}</strong></a>
      </span>
    </Container>
  );
}
