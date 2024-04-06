import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const fadeOut = keyframes`
  
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const MenuMobileContainer = styled.div`
  position: absolute;
  z-index: 5;

  width: 100%;
  height: calc(100vh - 7.7rem);

  background-color: ${({ theme }) => theme.COLORS.DARK['400']};

  animation: ${({ isOpenMenu }) => (isOpenMenu ? fadeIn : fadeOut)} 0.3s
    forwards;

  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
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

  nav {
    padding: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK['1000']};

    a {
      ${({ theme }) => theme.FONTS.POPPINS['300-regular']};

      font-weight: 300;
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;
  height: 4.8rem;

  padding-inline: 1.4rem;

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
`;

export const ButtonMenu = styled.button`
  background: transparent !important;
`;
