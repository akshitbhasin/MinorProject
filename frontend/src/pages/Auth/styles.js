import styled from 'styled-components';
import img from './authbg.jpg';


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${img});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */ 
`;

export const Content = styled.div`
  max-width: 253px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
  }
  
  input {
    height: 44px;
    padding: 0 14px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 13px;
    background-color: #fff;

    ::placeholder {
      color: #999;
    }
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  background: ${props => props.github ? "#000000" : props.linkedin ? "#0e76a8 " :  
  "linear-gradient(to right, #142144, #8ea2dd )"}; 
  
  img {
   order: 1;

  }
`;
export const StyledLink = styled.link`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
export const Error = styled.p`
  color: #ff0569;
  font-weight: bold;
  font-size: 20px;
  background: white;
  border-radius : 5px;
  margin-top: 18px;
`;
