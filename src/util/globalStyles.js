import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    &:focus-visible {
      outline: 2px ridge #fa5252;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    box-sizing: border-box;
    background: url("/img/background.jpg");
    background-size: cover;
    font-family: 'Oswald', sans-serif;
    overflow-x: hidden;
    color: #ffdeeb;;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle