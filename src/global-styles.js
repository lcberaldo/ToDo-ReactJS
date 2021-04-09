import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #E3E9FF;
    color: #AAB4C9;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family:  sans-serif;
    font-size: 16px;

  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }


`;
export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;
