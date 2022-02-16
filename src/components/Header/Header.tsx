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
  showBorderBottom?: boolean;
}

const Header = ({ left, center, right, bottom, showBorderBottom = false }: Props) => (
  <HeaderStyled showBorderBottom={showBorderBottom}>
    <HeaderTop>
      <HeaderLeft>{left}</HeaderLeft>
      <HeaderCenter>{center}</HeaderCenter>
      <HeaderRight>{right}</HeaderRight>
    </HeaderTop>
    {bottom && <HeaderBottom>{bottom}</HeaderBottom>}
  </HeaderStyled>
);

Header.Button = HeaderButton;

export default Header;
