import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  html {
    background: #181a1b;
  }

  * {
    font-family: "Roboto", sans-serif;
  }
`;
