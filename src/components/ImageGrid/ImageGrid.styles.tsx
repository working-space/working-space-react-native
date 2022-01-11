import styled from '@emotion/native';

import { GrayColor, OpacityGrayColor } from 'src/utils/color';

export const ImageWrapper = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const ImageGridModal = styled.SafeAreaView`
  flex: 1;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 16px;
  padding-right: 16px;
  z-index: 99;
`;

export const TotalView = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
`;

export const CardImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  width: 100%;
  padding: 16px;
  background-color: ${OpacityGrayColor.OPACITY_BLACK_70};
`;

export const InfoBoxSubTitleView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 14px;
`;

export const InfoBoxSubInfo = styled.View<{ start?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding-right: 8px;
  padding-left: ${({ start }) => !start && '8px'};
  border-left-width: ${({ start }) => !start && '1px'};
  border-style: solid;
  border-color: ${GrayColor.GRAY_400};
`;
