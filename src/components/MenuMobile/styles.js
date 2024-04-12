import { styled } from 'styled-components';

export const MenuMobileContainer = styled.div`
  position: absolute;
  z-index: 1000;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK['400']};

  transform: ${({ isOpenMenu }) =>
    isOpenMenu ? 'translateX(0)' : 'translateX(-100%)'};

  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuMobileHeader = styled.header`
  width: 100%;
  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK['700']};

  span {
    ${({ theme }) => theme.FONTS.ROBOTO['300-bold']};
    font-weight: normal;
  }
`;

export const MenuMobileContent = styled.div`
  width: 100%;

  padding: 3.6rem 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  h3 {
    ${({ theme }) => theme.FONTS.POPPINS['300-regular']};
  }

  nav {
    display: flex;
    flex-direction: column;

    button {
      text-align: left;
      width: 100%;
      ${({ theme }) => theme.FONTS.POPPINS['300-regular']};

      color: ${({ theme }) => theme.COLORS.LIGHT['300']};

      font-weight: 300;

      cursor: pointer;

      background-color: transparent;
      padding: 1rem;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK['1000']};

      a {
        color: ${({ theme }) => theme.COLORS.LIGHT['300']};
      }
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;
  height: 4.8rem;

  padding-left: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK['900']};
  border-radius: 5px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT['100']};
  }

  input {
    width: 100%;
    height: 100%;

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
`;

export const ButtonMenu = styled.button`
  background: transparent !important;
`;
