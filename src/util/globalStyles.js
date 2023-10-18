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

  #root {
    position: absolute;
    width: 100%;
    background: url("/img/background.jpg") no-repeat;
    background-size: cover;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;

    @media (max-width: 95rem) {
      font-size: 56%;
    }
  }

  body {
    box-sizing: border-box;
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