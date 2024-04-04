import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK['600']};

  display: flex;
  align-items: center;
`;

export const FooterContent = styled.div`
  max-width: 136.8rem;
  width: 100%;

  margin: 0 auto;
  padding: 0 1.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 11rem;
    height: 2rem;
  }

  span {
    ${({ theme }) => theme.FONTS.ROBOTO['50-regular']}

    color: ${({ theme }) => theme.COLORS.LIGHT['200']}
  }

  @media screen and (min-width: 768px) {
    padding: 0 2rem;

    img {
      width: 18.6rem;
      height: 3rem;
    }

    span {
      ${({ theme }) => theme.FONTS.ROBOTO['100-regular']}
    }
  }
`;
