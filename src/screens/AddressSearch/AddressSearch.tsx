import React, { useRef, useState } from 'react';
import { TextInput, View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import ChevronRightIcon from 'src/assets/icons/icon_chevron_right.svg';
import DeleteGrayIcon from 'src/assets/icons/icon_delete_gray.svg';
import EmptyIcon from 'src/assets/icons/icon_empty.svg';
import LocateActiveIcon from 'src/assets/icons/icon_locate_active.svg';
import SearchIcon from 'src/assets/icons/icon_search.svg';
import SearchGrayIcon from 'src/assets/icons/icon_search_gray.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import useInput from 'src/hooks/useInput';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import {
  AddressStyled,
  AddressSafeArea,
  SearchInput,
  SearchInputButton,
  SearchInputWrapper,
  SearchInputButtonWrapper,
  AddressItemText,
  CurrentLocation,
  CurrentLocationWrapper,
  AddressSearchInfo,
  AddressSearchInfoItem,
  AddressTypo,
  ListItemDot,
  AddressSearchResultItem,
  AddressSearchResultBadge,
  AddressWrapper,
  NoResultMessage,
} from './AddressSearch.styles';

interface SampleAddressItem {
  title: string;
  address: string;
}

const sampleAddressList: SampleAddressItem[] = [
  {
    title: '서울대학교 경영대학',
    address: '서울시 서초구 양재천로 131 4층',
  },
  {
    title: '서울대학교 경영대학 2',
    address: '서울시 서초구 양재천로 131',
  },
];

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const AddressSearch = ({ navigation: { goBack } }: Props) => {
  const textInputRef = useRef<TextInput>(null);
  const [searched, setSearched] = useState(false);
  const [addressResult, setAddressResult] = useState<SampleAddressItem[]>([]);

  const {
    value: searchKeyword,
    isFocus: isFocusSearchKeyword,
    setValue: setSearchKeyword,
    onChangeText: onChangeTextSearchKeyword,
    onFocus: onFocusSearchKeyword,
    onBlur: onBlurSearchKeyword,
  } = useInput('');

  const handlePressSearch = () => {
    setSearched(true);
    textInputRef.current?.blur();

    if (searchKeyword === '뿌엑?') {
      setAddressResult([]);

      return;
    }

    setAddressResult(sampleAddressList);
  };

  const handleClear = () => {
    setSearched(false);
    setSearchKeyword('');
    textInputRef.current?.focus();
  };

  return (
    <AddressStyled>
      <AddressSafeArea>
        <Header
          left={
            <Header.Button onPress={goBack}>
              <BackIcon width={24} height={24} />
            </Header.Button>
          }
          center={<Typo type="REGULAR_16">주소 검색</Typo>}
          right={
            <Header.Button>
              <EmptyIcon width={24} height={24} />
            </Header.Button>
          }
        />
      </AddressSafeArea>
      <SearchInputWrapper>
        <SearchInput
          ref={textInputRef}
          placeholder="지번, 도로명, 건물명으로 검색해보세요!"
          value={searchKeyword}
          onChangeText={onChangeTextSearchKeyword}
          isFocus={isFocusSearchKeyword}
          onFocus={onFocusSearchKeyword}
          onBlur={onBlurSearchKeyword}
          onSubmitEditing={handlePressSearch}
          autoFocus
        />
        <SearchInputButtonWrapper>
          {!!searchKeyword && (
            <SearchInputButton onPress={handleClear}>
              <DeleteGrayIcon />
            </SearchInputButton>
          )}
          <SearchInputButton onPress={handlePressSearch}>
            {isFocusSearchKeyword ? <SearchIcon width="24" height="24" /> : <SearchGrayIcon width="24" height="24" />}
          </SearchInputButton>
        </SearchInputButtonWrapper>
      </SearchInputWrapper>
      <CurrentLocationWrapper>
        <CurrentLocation>
          <LocateActiveIcon width={24} height={24} />
          <AddressItemText>
            <Typo type="REGULAR_14">현재 위치로 설정</Typo>
          </AddressItemText>
          <ChevronRightIcon width={24} height={24} />
        </CurrentLocation>
      </CurrentLocationWrapper>
      {searched && !addressResult.length && (
        <NoResultMessage>
          <AddressTypo type="REGULAR_14" align="center">
            검색 결과가 없습니다.{'\n'}도로명, 지번, 건물명, 아파트명으로{'\n'}다시 검색해주세요!
          </AddressTypo>
        </NoResultMessage>
      )}

      {!isFocusSearchKeyword && searched && (
        <FlatList
          data={addressResult}
          keyExtractor={(item) => item.address}
          renderItem={({ item }) => {
            return (
              <AddressSearchResultItem>
                <Typo type="REGULAR_14">{item.title}</Typo>
                <AddressWrapper>
                  <AddressSearchResultBadge>
                    <Typo type="REGULAR_11" color={GrayColor.GRAY_300}>
                      도로명
                    </Typo>
                  </AddressSearchResultBadge>
                  <Typo type="REGULAR_12" color={GrayColor.GRAY_300}>
                    {item.address}
                  </Typo>
                </AddressWrapper>
              </AddressSearchResultItem>
            );
          }}
        />
      )}

      {!searched && (
        <AddressSearchInfo>
          <AddressSearchInfoItem>
            <AddressTypo type="BOLD_14">주소 검색 Tip</AddressTypo>
          </AddressSearchInfoItem>
          <AddressSearchInfoItem>
            <ListItemDot />
            <View>
              <AddressTypo type="REGULAR_14">도로명 + 건물번호</AddressTypo>
              <AddressTypo type="REGULAR_14" color={GrayColor.GRAY_300}>
                예) 작업로234길 6
              </AddressTypo>
            </View>
          </AddressSearchInfoItem>
          <AddressSearchInfoItem>
            <ListItemDot />
            <View>
              <AddressTypo type="REGULAR_14">지역명(동/읍/면리) + 번지</AddressTypo>
              <AddressTypo type="REGULAR_14" color={GrayColor.GRAY_300}>
                예) 작업동 23-4
              </AddressTypo>
            </View>
          </AddressSearchInfoItem>
          <AddressSearchInfoItem>
            <ListItemDot />
            <View>
              <AddressTypo type="REGULAR_14">건물명, 아파트명</AddressTypo>
              <AddressTypo type="REGULAR_14" color={GrayColor.GRAY_300}>
                예) 작업아파트
              </AddressTypo>
            </View>
          </AddressSearchInfoItem>
        </AddressSearchInfo>
      )}
    </AddressStyled>
  );
};

export default AddressSearch;
