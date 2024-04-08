import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .my-toast{
    padding: 1.6rem;
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

 input, button, textarea {
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
  input, button, textarea {
    
  }

  button, a {
    cursor: pointer;
    transform: filter .2s;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
