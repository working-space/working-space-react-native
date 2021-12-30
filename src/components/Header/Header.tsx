import React from 'react';

import { HeaderStyled, HeaderTop, HeaderBottom, HeaderLeft, HeaderRight, HeaderButton } from './Header.styles';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  showBorderBottom?: boolean;
}

const Header = ({ left, right, bottom, showBorderBottom = false }: Props) => (
  <HeaderStyled showBorderBottom={showBorderBottom}>
    <HeaderTop>
      {left && <HeaderLeft>{left}</HeaderLeft>}
      {right && <HeaderRight>{right}</HeaderRight>}
    </HeaderTop>
    {bottom && <HeaderBottom>{bottom}</HeaderBottom>}
  </HeaderStyled>
);

Header.Button = HeaderButton;

export default Header;
