import { keyframes, styled } from 'styled-components';

const entry = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 4.7rem;

  img {
    max-width: 27.8rem;
    height: 4.4rem;
    width: 100%;
  }

  > div {
    max-width: 102.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.3rem;
  }

  form {
    max-width: 47.6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    h1 {
      display: none;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT['100']};
      ${({ theme }) => theme.FONTS.POPPINS['400-medium']}
    }

    div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;

      animation: ${entry} 0.5s ease-in-out;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    > div {
      max-width: 102.4rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    form {
      background-color: ${({ theme }) => theme.COLORS.DARK['700']};
      padding: 6.4rem;
      border-radius: 16px;

      h1 {
        display: block;
      }
    }
  }
`;
