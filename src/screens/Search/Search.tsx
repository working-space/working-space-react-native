import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CloseIcon from 'src/assets/icons/icon_close_gray.svg';
import SearchIcon from 'src/assets/icons/icon_search.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  SearchInput,
  SearchSafeArea,
  SearchStyled,
  SearchInputButton,
  SearchInputWrapper,
  SearchContent,
  SearchGuide,
  SearchGuideText,
} from './Search.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Search = ({ navigation: { goBack } }: Props) => {
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
              <SearchInput placeholder="찾고 있는 카페를 검색해보세요!" autoFocus />
              <SearchInputButton>
                <SearchIcon />
              </SearchInputButton>
            </SearchInputWrapper>
          }
          fillWidth="right"
        />
      </SearchSafeArea>
      <SearchContent>
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
      </SearchContent>
    </SearchStyled>
  );
};

export default Search;
