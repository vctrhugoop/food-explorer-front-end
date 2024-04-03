import styled from 'styled-components';

export const LabelContainer = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT['400']};

  ${({ theme }) => theme.FONTS.ROBOTO['200-regular']}
`;
