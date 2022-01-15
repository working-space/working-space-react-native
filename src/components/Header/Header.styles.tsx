import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

interface HeaderStyledProps {
  showBorderBottom: boolean;
}

export const HeaderStyled = styled.View<HeaderStyledProps>`
  width: 100%;
  height: 56px;
  z-index: 98;
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

export const HeaderBottom = styled.View`
  background-color: ${GrayColor.GRAY_0};
`;

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
