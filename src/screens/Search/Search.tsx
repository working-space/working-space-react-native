import React, { useRef, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CloseIcon from 'src/assets/icons/icon_close.svg';
import DeleteGrayIcon from 'src/assets/icons/icon_delete_gray.svg';
import SearchIcon from 'src/assets/icons/icon_search.svg';
import SearchGrayIcon from 'src/assets/icons/icon_search_gray.svg';
import CafeListItem from 'src/components/CafeListItem/CafeListItem';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import useInput from 'src/hooks/useInput';
import { Cafe } from 'src/models/cafe';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import sampleCafeList from '../sampleCafeList';
import {
  SearchInput,
  SearchSafeArea,
  SearchStyled,
  SearchInputButton,
  SearchInputWrapper,
  SearchContent,
  SearchGuide,
  SearchGuideText,
  resultListStyle,
  ListSeparator,
  SearchResult,
  SearchInputButtonWrapper,
} from './Search.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Search = ({ navigation: { navigate, goBack } }: Props) => {
  const textInputRef = useRef<TextInput>(null);
  const [searched, setSearched] = useState(false);

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
  };

  const handleClear = () => {
    setSearchKeyword('');
    setSearched(false);
    textInputRef.current?.focus();
  };

  const handlePressCafeListItem = (cafe: Cafe) => {
    navigate('Detail', { cafeId: cafe.id });
  };

  return (
    <SearchStyled>
      <SearchSafeArea>
        <Header
          left={
            <Header.Button onPress={goBack}>
              <CloseIcon />
            </Header.Button>
          }
          right={
            <SearchInputWrapper>
              <SearchInput
                ref={textInputRef}
                placeholder="찾고 있는 카페를 검색해보세요!"
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
                  {isFocusSearchKeyword ? <SearchIcon /> : <SearchGrayIcon />}
                </SearchInputButton>
              </SearchInputButtonWrapper>
            </SearchInputWrapper>
          }
          fillWidth="right"
        />
      </SearchSafeArea>
      <SearchContent>
        {!searched ? (
          <SearchGuide>
            <SearchGuideText>
              <Typo type={FontType.REGULAR_14}>찾고 있는 카페를 검색해보세요!</Typo>
            </SearchGuideText>
            <SearchGuideText>
              <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_300}>
                예) 테라로사, 커피랑 도서관
              </Typo>
            </SearchGuideText>
          </SearchGuide>
        ) : (
          <SearchResult>
            <FlatList
              contentContainerStyle={resultListStyle}
              data={sampleCafeList}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <ListSeparator />}
              renderItem={({ item }) => {
                const { id, name, address } = item;
                const distance = '1m';

                const cafe = {
                  id,
                  name,
                  distance,
                  address,
                  tags: [],
                  likeCount: 0,
                  comments: { totalCount: 0, data: [] },
                };

                return <CafeListItem data={cafe} hasBorder onPress={() => handlePressCafeListItem(cafe)} />;
              }}
              onEndReachedThreshold={0.5}
            />
          </SearchResult>
        )}
      </SearchContent>
    </SearchStyled>
  );
};

export default Search;
