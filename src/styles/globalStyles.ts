import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
