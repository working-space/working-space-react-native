import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CheckOffIcon from 'src/assets/icons/icon_check_off.svg';
import CheckOnIcon from 'src/assets/icons/icon_check_on.svg';
import ChevronRightIcon from 'src/assets/icons/icon_chevron_right.svg';
import CloseIcon from 'src/assets/icons/icon_close.svg';
import EmptyIcon from 'src/assets/icons/icon_empty.svg';
import LocateActiveIcon from 'src/assets/icons/icon_locate_active.svg';
import LocationIcon from 'src/assets/icons/icon_location.svg';
import SearchGrayIcon from 'src/assets/icons/icon_search_gray.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  AddressStyled,
  AddressSafeArea,
  SearchInput,
  SearchInputRightIcon,
  AddressList,
  AddressItem,
  AddressItemText,
  CurrentLocation,
  CurrentLocationWrapper,
} from './Address.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Address = ({ navigation: { navigate, goBack } }: Props) => {
  return (
    <AddressStyled>
      <AddressSafeArea>
        <Header
          left={
            <Header.Button onPress={goBack}>
              <CloseIcon width={24} height={24} />
            </Header.Button>
          }
          center={<Typo type={FontType.REGULAR_16}>주소 설정</Typo>}
          right={
            <Header.Button>
              <EmptyIcon width={24} height={24} />
            </Header.Button>
          }
        />
      </AddressSafeArea>
      <SearchInput onPress={() => navigate('AddressSearch')}>
        <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300}>
          지번, 도로명, 건물명으로 검색해보세요!
        </Typo>
        <SearchInputRightIcon>
          <SearchGrayIcon width="24" height="24" />
        </SearchInputRightIcon>
      </SearchInput>
      <CurrentLocationWrapper>
        <CurrentLocation>
          <LocateActiveIcon width={24} height={24} />
          <AddressItemText>
            <Typo type={FontType.REGULAR_14}>현재 위치로 설정</Typo>
          </AddressItemText>
          <ChevronRightIcon width={24} height={24} />
        </CurrentLocation>
      </CurrentLocationWrapper>
      <AddressList>
        <AddressItem>
          <LocationIcon width={24} height={24} />
          <AddressItemText>
            <Typo type={FontType.REGULAR_14}>서울 관악구 남부순환로186가길 17</Typo>
          </AddressItemText>
          <CheckOnIcon width={24} height={24} />
        </AddressItem>
        <AddressItem>
          <LocationIcon width={24} height={24} />
          <AddressItemText>
            <Typo type={FontType.REGULAR_14}>경기도 과천시 주암동 66-1</Typo>
          </AddressItemText>
          <CheckOffIcon width={24} height={24} />
        </AddressItem>
      </AddressList>
    </AddressStyled>
  );
};

export default Address;
