import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    padding: 3rem 20rem;
    background: url("../../public/img/background.jpg");
    background-size: cover;
    font-family: 'Oswald', sans-serif;
  }

  a {
    text-decoration: none;
    color: #ffdeeb;
  }
`

export default GlobalStyle