import styled from '@emotion/native';
import Typo from 'src/components/Typo/Typo';
import { GrayColor } from 'src/utils/color';

interface SearchInputStyledProps {
  isFocus?: boolean;
}

export const AddressStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const AddressSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
  z-index: 2;
`;

export const SearchInput = styled.TextInput<SearchInputStyledProps>`
  height: 40px;
  border: 1px solid ${({ isFocus }) => (isFocus ? GrayColor.GRAY_400 : GrayColor.GRAY_200)};
  border-radius: 20px;
  padding: 0 16px;
  padding-right: 76px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: ${GrayColor.GRAY_400};
`;

export const SearchInputWrapper = styled.View`
  margin: 8px 16px;
`;

export const SearchInputButtonWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInputButton = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const CurrentLocationWrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${GrayColor.GRAY_100};
  border-style: solid;
`;

export const CurrentLocation = styled.TouchableOpacity`
  padding: 14px 0;
  margin: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const AddressSearchInfo = styled.View`
  margin: 16px;
`;

export const ListItemDot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: ${GrayColor.GRAY_500};
  margin: 8px;
`;

export const AddressSearchInfoItem = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;

export const AddressTypo = styled(Typo)`
  line-height: 20px;
`;

export const AddressList = styled.View`
  margin: 0 16px;
`;

export const AddressItem = styled.TouchableOpacity`
  padding: 14px 0;
  flex-direction: row;
  align-items: center;
`;

export const AddressItemText = styled.View`
  flex: 1;
  margin: 0 12px;
`;

export const AddressSearchResultItem = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${GrayColor.GRAY_50};
  border-style: solid;
  padding: 16px;
`;

export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const AddressSearchResultBadge = styled.View`
  background-color: ${GrayColor.GRAY_100};
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
`;

export const NoResultMessage = styled.View`
  margin-top: 100px;
`;
