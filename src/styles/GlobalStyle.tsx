import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.sansSerif};
  }

  h1,
  h2 {
    margin: 0;
  }

  input {
    all: unset;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    font: inherit;
    background-color: inherit;
  }
`;

export default GlobalStyles;
