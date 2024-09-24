import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${(props) => props.theme.spacings.medium} 0;
    font-weight: 600;
  }

  p {
    margin: ${(props) => props.theme.spacings.medium} 0;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  button {
    padding: ${(props) => props.theme.spacings.small} ${(props) =>
  props.theme.spacings.medium};
    border-radius: ${(props) => props.theme.borders.radius};
    border: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  textarea {
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;
