import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const LinkIconStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LinkIconItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 19px;
`;

export const LinkIconText = css`
  margin-left: 7px;
`;

export const DetailStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const DetailView = styled.ScrollView``;

export const DetailTitleStyled = styled.View`
  flex: 1;
  margin: 0 16px;
  margin-top: 25px;
`;

export const HeadTitle = css`
  margin-top: 25px;
`;

export const TitleInfo = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

export const TitleInfoItem = styled.View<{ start?: boolean }>`
  flex-direction: row;
  justify-content: center;
  padding-right: 8px;
  padding-left: ${({ start }) => !start && '8px'};
  border-left-width: ${({ start }) => !start && '1px'};
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
`;

export const TitleInfoItemText = css`
  margin-left: 6px;
`;

export const DetailInfoStyled = styled.View`
  padding: 0 16px;
`;

export const DetailInfoBox = styled.View`
  flex-direction: column;
  padding: 24px 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
`;

export const DetailInfoBoxItem = styled.View`
  flex-direction: row;
  padding-bottom: 12px;
`;

export const DetailInfoBoxTitle = styled.View`
  width: 77px;
`;

export const DetailInfoBoxStyled = styled.View`
  flex-direction: column;
`;

export const DetailInfoBoxCopy = styled.TouchableOpacity``;

export const DetailLocationStyled = styled.View`
  padding: 0 16px;
`;

export const DetailLocationBox = styled.View`
  padding: 24px 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
`;

export const LocationMap = styled.View`
  width: 100%;
  height: 180px;
  border-color: ${GrayColor.GRAY_200};
`;

export const SelectTagModal = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${GrayColor.GRAY_0};
`;

export const SelectTagModalHeader = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const SelectTagModalTop = styled.View`
  align-items: flex-end;
  padding: 16px 0;
  padding-right: 16px;
`;

export const SelectTagModalBottom = styled.View`
  align-items: flex-start;
  padding-top: 16px;
  padding-left: 16px;
`;

export const SelectTagModalSubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CommentOptionStyled = styled.View`
  width: 70%;
  flex-direction: column;
  background-color: ${GrayColor.GRAY_0};
  margin: 0 auto;
  elevation: 6;
`;

export const CommentOptionItem = styled.TouchableOpacity`
  padding: 16px;
`;
