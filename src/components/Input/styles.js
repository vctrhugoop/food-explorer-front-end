import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  padding: 1.2rem 1.4rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK['900']};

  ${({ theme }) => theme.FONTS.ROBOTO['100-regular']}

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  }
`;
