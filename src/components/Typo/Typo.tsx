import React from 'react';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { Align, Font, FontType } from 'src/utils/font';
import { ExtendComponentProps } from 'src/utils/types';

import { TypoStyled } from './Typo.styles';

type Props = ExtendComponentProps<
  typeof TypoStyled,
  {
    children: React.ReactNode;
    font?: FontType;
    color?: GrayColor | PrimaryColor | SecondColor | SubColor;
    align?: Align;
    onPress?: () => void;
  }
>;

const Typo = ({
  children,
  font = FontType.REGULAR_BODY_02,
  color = GrayColor.GRAY_400,
  align = Align.LEFT,
  style,
  onPress,
}: Props) => {
  const fontStyle = Font.getStyle(font);

  return (
    <TypoStyled
      family={Font.getFamily(fontStyle.weight)}
      size={fontStyle.size}
      weight={fontStyle.weight}
      color={color}
      align={align}
      style={style}
      onPress={onPress}
    >
      {children}
    </TypoStyled>
  );
};

export default Typo;
