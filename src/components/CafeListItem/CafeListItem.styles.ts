import styled, { css } from '@emotion/native';

import { GrayColor, PrimaryColor } from 'src/utils/color';

interface ItemStyledProps {
  hasBorder: boolean;
}

const row = css`
  flex-direction: row;
  align-items: center;
`;

export const tagListStyle = css`
  justify-content: center;
  margin-left: -2px;
  margin-bottom: 24px;
`;

export const ItemStyled = styled.TouchableOpacity<ItemStyledProps>`
  position: relative;
  width: 100%;
  border-width: ${({ hasBorder }) => (hasBorder ? '1px' : '0')};
  border-style: solid;
  border-color: ${GrayColor.GRAY_150};
  border-radius: ${({ hasBorder }) => (hasBorder ? '4px' : '0')};
  padding: 16px;
  background-color: ${GrayColor.GRAY_0};
`;

export const BadgeList = styled.View`
  ${row};
  margin-bottom: 8px;
`;

export const Badge = styled.View`
  background-color: ${PrimaryColor.PRIMARY_500};
  padding: 0 2px;
  margin-right: 8px;
`;

export const BadgeText = styled.Text`
  color: white;
  font-size: 11px;
  font-weight: bold;
`;

export const ItemHeader = styled.View`
  ${row}
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ItemHeaderRight = styled.View`
  ${row}
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  position: relative;
`;

export const Distance = styled.Text`
  font-size: 12px;
  margin-left: 4px;
`;

export const Address = styled.Text`
  font-size: 11px;
  color: ${GrayColor.GRAY_300};
  margin-bottom: 8px;
`;

export const TagEmpty = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const TagEmptyText = styled.Text`
  font-size: 11px;
  color: ${GrayColor.GRAY_300};
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const TagSeparatorContainer = styled.View`
  ${row}
`;

export const TagSeparator = styled.View`
  width: 1px;
  height: 12px;
  margin: 0 8px;
  background-color: ${GrayColor.GRAY_200};
`;

export const TagIcon = styled.View`
  margin-right: 4px;
`;

export const TagName = styled.Text`
  font-size: 11px;
`;

export const InfoList = styled.View`
  ${row}
`;

export const Info = styled.View`
  ${row}
  margin-right: 16px;
`;

export const InfoCount = styled.Text`
  margin-left: 4px;
  font-size: 12px;
`;
