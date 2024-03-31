import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  padding: 1.2rem 1.4rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK['900']};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  }
`;
