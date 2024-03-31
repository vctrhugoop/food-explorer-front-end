import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 1.2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};

  border-radius: 5px;

  font-family: ${({ theme }) => theme.FONTS.TEXT};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO['200']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO['400']};

    cursor: default;
  }
`;
