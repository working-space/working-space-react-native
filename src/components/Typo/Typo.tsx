import React from 'react';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { Align, Font, FontType } from 'src/utils/font';

import { TypoStyled } from './Typo.styles';

interface Props {
  children: React.ReactNode;
  font?: FontType;
  color?: GrayColor | PrimaryColor | SecondColor | SubColor;
  align?: Align;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  textDecorationLine?: 'none' | 'underline';
  onPress?: () => void;
}

const Typo = ({
  children,
  font = FontType.REGULAR_BODY_02,
  color = GrayColor.GRAY_400,
  align = Align.LEFT,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  lineHeight = 1.5,
  numberOfLines,
  ellipsizeMode,
  textDecorationLine = 'none',
  onPress,
}: Props) => {
  const style = Font.getStyle(font);

  return (
    <TypoStyled
      family={Font.getFamily(style.weight)}
      size={style.size}
      weight={style.weight}
      color={color}
      align={align}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      lineHeight={lineHeight}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      textDecorationLine={textDecorationLine}
      onPress={onPress}
    >
      {children}
    </TypoStyled>
  );
};

export default Typo;
