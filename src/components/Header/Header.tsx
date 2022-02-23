import React from 'react';

import {
  HeaderStyled,
  HeaderTop,
  HeaderBottom,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  HeaderButton,
} from './Header.styles';

interface Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  fillWidth?: 'left' | 'center' | 'right';
  showBorderBottom?: boolean;
}

const Header = ({ left, center, right, bottom, fillWidth, showBorderBottom = false }: Props) => (
  <HeaderStyled showBorderBottom={showBorderBottom}>
    <HeaderTop>
      <HeaderLeft fillWidth={fillWidth === 'left'}>{left}</HeaderLeft>
      <HeaderCenter fillWidth={fillWidth === 'center'}>{center}</HeaderCenter>
      <HeaderRight fillWidth={fillWidth === 'right'}>{right}</HeaderRight>
    </HeaderTop>
    {bottom && <HeaderBottom>{bottom}</HeaderBottom>}
  </HeaderStyled>
);

Header.Button = HeaderButton;

export default Header;
