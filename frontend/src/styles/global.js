import { createGlobalStyle } from 'styled-components';
import darkImg from '../assets/darkImg1.jpg';
import lightImg from '../assets/lightImg1.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    overflow: hidden;
    background:linear-gradient(${props=>((props.theme.title === "dark")?"rgba(255,255,255, 0), rgba(0,0,0,0.1)" : "rgba(255,255,255, 1), rgba(0,0,0,0.1)" )}), url(${props=> ((props.theme.title === "dark")?darkImg : lightImg)});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    height: 100%;
    font-size: 14px;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  input, button {
    border: none;
  }
`;
