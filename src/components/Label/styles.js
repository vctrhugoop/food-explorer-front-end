import styled from 'styled-components';
import { fonts } from '../../styles/typography';

export const LabelContainer = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT['400']};

  ${fonts.ROBOTO['200-regular']}
`;
