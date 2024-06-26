import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK['700']};
`;

export const HeaderContent = styled.div`
  max-width: 136.8rem;
  width: 100%;

  margin: 0 auto;

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 3.2rem;

    padding: 5.6rem 2rem 2.4rem;
  }
`;

export const ButtonMenu = styled.button`
  background: transparent !important;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
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
`;

export const SearchInput = styled.div`
  display: none;
  gap: 1.4rem;

  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK['900']};
  border-radius: 5px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT['100']};
  }

  input {
    max-width: 34.4rem;
    width: 100%;

    background-color: transparent;
    ${({ theme }) => theme.FONTS.ROBOTO['200-regular']}

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT['500']};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT['400']};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-inline: 2rem;
  }
`;

export const ButtonOrder = styled.button`
  background: transparent;

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

  p {
    display: none;
    ${({ theme }) => theme.FONTS.POPPINS['100-medium']}
  }

  @media screen and (min-width: 1024px) {
    max-width: 21.6rem;
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};
    border-radius: 5px;

    span {
      display: none;
    }

    p {
      display: block;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO['200']};
    }
  }
`;

export const ButtonSignOut = styled.button`
  display: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
