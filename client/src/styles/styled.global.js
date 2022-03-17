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

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ; 
  margin: 0.5em;
  padding: 0.5em;
  width: 90%;
  height: 3rem;
  border-radius: 30px;
  background-color: black;
  color: white;
  :hover {
    background-color: ${COLORS.buttonLogin};
    color: white;
    cursor: pointer;
  }
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
