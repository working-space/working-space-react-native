import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

interface BottomViewRowItemProps {
  align: 'left' | 'center' | 'right';
}

export const mapViewStyle = css`
  width: 100%;
  height: 100%;
`;

export const MapStyled = styled.View`
  flex: 1;
`;

export const MapSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
`;

export const MapViewContainer = styled.View`
  flex: 1;
`;

export const IconWrapper = styled.View`
  padding: 8px;
  border-radius: 100px;
  border: 1px solid ${GrayColor.GRAY_300};
  background-color: ${GrayColor.GRAY_200};
`;

export const SearchInput = styled.TouchableOpacity`
  height: 40px;
  border: 1px solid ${GrayColor.GRAY_200};
  border-radius: 20px;
  padding: 0 12px;
  margin: 0 16px;
  margin-top: 8px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const BottomView = styled.View`
  left: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

export const BottomViewRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 84px;
`;

export const BottomViewRowItem = styled.View<BottomViewRowItemProps>`
  justify-content: center;
  margin: 16px;

  ${({ align }) =>
    align === 'right' &&
    css`
      position: absolute;
      right: 0;
    `};
`;
