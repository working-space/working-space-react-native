import styled, { css } from '@emotion/native';

import { GrayColor, PrimaryColor } from 'src/utils/color';

export const Item = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  background-color: ${GrayColor.GRAY_0};
  padding-left: 9px;
  padding-right: 9px;
`;

export const ItemTagIcon = styled.View<{ selected: boolean }>`
  padding: 16px;
  border-radius: 64px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? PrimaryColor.PRIMARY_500 : GrayColor.GRAY_200)};
`;

export const ItemcheckIcon = styled.View<{ selected: boolean; showCount: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${({ showCount }) => (showCount ? '-1px' : '-2px')};
  right: ${({ showCount }) => (showCount ? '-1px' : '-2px')};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ showCount, selected }) =>
    !showCount ? GrayColor.GRAY_0 : selected ? PrimaryColor.PRIMARY_500 : GrayColor.GRAY_200};
  background-color: ${({ selected }) => (selected ? PrimaryColor.PRIMARY_500 : GrayColor.GRAY_200)};
`;

export const ItemTagName = css`
  width: 58px;
  padding-top: 12px;
`;
