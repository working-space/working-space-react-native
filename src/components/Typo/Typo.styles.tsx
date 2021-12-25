import styled from '@emotion/native';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { Align } from 'src/utils/font';

export const TypoStyled = styled.Text<{
  family: string;
  size: number;
  weight: number;
  color: GrayColor | PrimaryColor | SecondColor | SubColor;
  align: Align;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  lineHeight: number;
  textDecorationLine: string;
}>`
  font-family: ${({ family }) => family};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ align }) => align};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine};
`;
