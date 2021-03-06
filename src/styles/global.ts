import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${props => props.theme.colors.bgSecundary};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: Roboto, sans-serif;
    position: relative;
    min-height: 100vh;
  }
`;