import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;

  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK['700']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    span {
      margin-top: 3px;
      ${({ theme }) => theme.FONTS.ROBOTO['50-regular']}

      color: ${({ theme }) => theme.COLORS.CAKE['200']}
    }

    img {
      width: 16rem;
      height: 2.6rem;
    }
  }

  button {
    background: transparent !important;

    position: relative;

    span {
      width: 2rem;
      height: 2rem;

      position: absolute;
      top: -5px;
      right: -5px;

      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.TOMATO['200']};

      text-align: center;

      ${({ theme }) => theme.FONTS.POPPINS['100-medium']}

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
