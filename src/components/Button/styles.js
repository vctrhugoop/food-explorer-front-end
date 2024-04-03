import styled from 'styled-components';
import { fonts } from '../../styles/typography';

export const ButtonContainer = styled.button`
  width: 100%;

  padding: 1.2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};

  border-radius: 5px;

  ${fonts.POPPINS['100-medium']}

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO['200']};
  }

  &:disabled {
    cursor: default;

    opacity: 70%;
  }
`;
