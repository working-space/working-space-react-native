import styled from '@emotion/native';
import { GrayColor } from 'src/utils/color';

export const AddressStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const AddressSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
  z-index: 2;
`;

export const SearchInput = styled.TouchableOpacity`
  height: 40px;
  border: 1px solid ${GrayColor.GRAY_200};
  border-radius: 20px;
  padding: 0 16px;
  margin: 8px 16px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInputRightIcon = styled.View`
  position: absolute;
  right: 16px;
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
