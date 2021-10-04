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
  width: 100%;
  height: 44px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(0.25turn, #ff0569, #ff3d44, #ff613b);
`;

export const Error = styled.p`
  color: #ff0569;
  margin-top: 13px;
`;
