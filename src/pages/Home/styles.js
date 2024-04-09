import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 112rem;
  width: 100%;

  margin: 0 auto;
`;

export const HeroContainer = styled.section`
  width: 100%;

  margin: 4.4rem 0 6.2rem;

  padding: 0 1.6rem 0 3.6rem;
`;

export const HeroContent = styled.div`
  width: calc(100% - 2.4rem);
  height: 12rem;
  width: 100%;

  border-radius: 3px;
  background: ${({ theme }) => theme.COLORS.GRADIENT['200']};

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  padding: 2rem;

  img {
    width: 19.1rem;

    position: absolute;
    left: -3rem;
    bottom: 0;
  }

  div {
    width: 20.2rem;

    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;

    color: ${({ theme }) => theme.COLORS.LIGHT['300']};

    h1 {
      ${({ theme }) => theme.FONTS.POPPINS['100-medium']}
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 140%;
    }

    p {
      ${({ theme }) => theme.FONTS.POPPINS['100-medium']}
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;
