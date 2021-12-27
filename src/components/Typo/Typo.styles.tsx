import styled from '@emotion/native';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { Align } from 'src/utils/font';

export const TypoStyled = styled.Text<{
  family: string;
  size: number;
  weight: number;
  color: GrayColor | PrimaryColor | SecondColor | SubColor;
  align: Align;
}>`
  font-family: ${({ family }) => family};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;
