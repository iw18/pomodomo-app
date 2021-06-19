import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Heebo', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `
  export default GlobalStyles;