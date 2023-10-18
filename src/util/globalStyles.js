import {createGlobalStyle} from "styled-components";
import {styleVariables} from "./styleVariables.js";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    &:focus-visible {
      outline: 2px ridge ${styleVariables.colors.outline};
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
    @media (max-width: 23rem) {
      font-size: 45%;
    }
  }

  body {
    box-sizing: border-box;
    font-family: ${styleVariables.fonts.oswald};
    overflow-x: hidden;
    color: ${styleVariables.colors.pinkLight};;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle