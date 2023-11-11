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

  img {
    max-width: 100%
  }
`;

export default GlobalStyles;
