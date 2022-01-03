import styled, { css } from '@emotion/native';
import { GrayColor, OpacityGrayColor, PrimaryColor } from 'src/utils/color';

interface FilterSelectProps {
  active: boolean;
}

export const cafeListStyle = css`
  margin: 0 16px;
  padding-bottom: 24px;
`;

export const MainStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
  padding-top: 56px;
  z-index: 1;
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

export const SearchInputPlaceHolder = styled.Text`
  font-size: 14px;
  color: ${GrayColor.GRAY_300};
`;

export const ScrolledListHeader = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 16px 16px 24px 16px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
  border-bottom-width: 1px;
  background-color: ${GrayColor.GRAY_0};
`;

export const ScrolledListHeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const FilterChangeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
`;

export const FilterChangeButtonText = styled.Text<FilterSelectProps>`
  font-size: 12px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${GrayColor.GRAY_400};
  margin-right: 4px;
`;

export const FilterSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 34px 34px 34px;
`;

export const FilterSelectItem = styled.TouchableOpacity<FilterSelectProps>`
  margin-right: 8px;
  padding: 12px 16px;
  border-radius: 20px;
  border: solid 1px ${({ active }) => (active ? PrimaryColor.PRIMARY_400 : GrayColor.GRAY_100)};
`;

export const FilterSelectText = styled.Text<FilterSelectProps>`
  font-size: 12px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

export const Dimmed = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  z-index: 11;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DimmedArea = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${OpacityGrayColor.OPACITY_GRAY_400};
`;

export const IconWrapper = styled.View`
  padding: 8px;
  border-radius: 100px;
  border: 1px solid ${GrayColor.GRAY_300};
  background-color: ${GrayColor.GRAY_200};
`;

export const CafeListContainer = styled.View`
  margin: 24px 16px;
`;

export const ListSeparator = styled.View`
  margin-bottom: 8px;
`;
