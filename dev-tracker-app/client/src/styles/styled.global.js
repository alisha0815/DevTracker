import { createGlobalStyle } from "styled-components";
import COLORS from "./styled.constants";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;     
  }
  body {
    background-color: ${COLORS.background};
    color: ${COLORS.text};
    cursor: default;
    font-family: 'Inter', sans-serif;
  }
  h1 {
      color: ${COLORS.button};
  }
  a {
      color: ${COLORS.text};
      text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
      background-color: transparent;
      outline: none;
      border: none;
      cursor: poiner;
      color: ${COLORS.button}
      
  }
`;

export default GlobalStyle;
