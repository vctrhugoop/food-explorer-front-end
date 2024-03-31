import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK['400']};
    color: ${({ theme }) => theme.COLORS.LIGHT['100']};

    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    border: none;
    outline: none;

    &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT['100']};
  }
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transform: filter .2s;
  }
`;