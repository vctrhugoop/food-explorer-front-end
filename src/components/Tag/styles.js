import styled from 'styled-components';

export const TagContainer = styled.span`
  background-color: ${({ theme }) => theme.COLORS.DARK['1000']};

  border-radius: 5px;

  padding: 0.4rem 0.8rem;

  ${({ theme }) => theme.FONTS.POPPINS['100-medium']}
`;
