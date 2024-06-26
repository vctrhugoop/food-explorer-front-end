import styled from 'styled-components';

export const AnchorLinkStyles = styled.span`
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT['100']};

  ${({ theme }) => theme.FONTS.POPPINS['100-medium']}

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    visibility: visible;
  }
`;
