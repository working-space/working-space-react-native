import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

interface HeaderStyledProps {
  showBorderBottom: boolean;
}

export const HeaderStyled = styled.View<HeaderStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 8px;
  z-index: 12;
  background-color: ${GrayColor.GRAY_0};

  ${({ showBorderBottom }) =>
    showBorderBottom &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-color: ${GrayColor.GRAY_100};
    `}
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

export const HeaderBottom = styled.View``;

export const HeaderLeft = styled.View``;

export const HeaderRight = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: 0 16px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
