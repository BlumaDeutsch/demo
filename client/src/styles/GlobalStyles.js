import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Roboto, sans-serif;
    background-color: #f4f7f6;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;