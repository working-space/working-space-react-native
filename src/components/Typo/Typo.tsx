import React from 'react';
import { TextProps } from 'react-native';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { Align, Font, FontType } from 'src/utils/font';

import { TypoRightIcon, TypoStyled } from './Typo.styles';

interface Props extends TextProps {
  type?: FontType;
  color?: GrayColor | PrimaryColor | SecondColor | SubColor;
  align?: Align;
}

const Typo = ({
  children,
  type = FontType.REGULAR_12,
  color = GrayColor.GRAY_400,
  align = Align.LEFT,
  ...props
}: Props) => {
  const fontStyle = Font.getStyle(type);

  return (
    <TypoStyled
      family={Font.getFamily(fontStyle.weight)}
      size={fontStyle.size}
      weight={fontStyle.weight}
      color={color}
      align={align}
      {...props}
    >
      {children}
    </TypoStyled>
  );
};

Typo.RightIcon = TypoRightIcon;

export default Typo;
