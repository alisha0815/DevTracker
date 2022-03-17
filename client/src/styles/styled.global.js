import { createGlobalStyle } from "styled-components";
import COLORS from "./styled.constants";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;  
      :focus {
   outline: 0;

}
 }   
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

    margin-top: 0.8rem;
    
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    background-color: ${COLORS.button};
    transition: transform 250ms ease-in;
  };

    button:hover {
    transform: scale(1.04);
    opacity: 0.8;
  }



    input, select {
    width: 400px;
    margin: 0 auto;
    padding: 0.8rem;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: 2px 2px 3px 3px darkgray;
    border-radius: 15px;
    margin-bottom: 1.1rem;
  }

  label {
    font-size: 1.2em;
    display: block;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .login-button{
    font-size: 0.8rem; 
  }

`;

export default GlobalStyle;
