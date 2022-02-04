import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import Header from 'src/components/Header/Header';
import NoneData from 'src/components/NoneData/NoneData';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { FontType } from 'src/utils/font';
import { BookmarksStyled, BookmarksView } from './Bookmarks.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Bookmarks'>;

const Bookmarks = ({ navigation: { goBack } }: Props) => {
  return (
    <BookmarksStyled>
      <Header
        left={
          <Header.Button onPress={() => goBack()}>
            <BackIcon />
          </Header.Button>
        }
      />
      <BookmarksView>
        <Typo type={FontType.BOLD_24}>즐겨찾기</Typo>
        <NoneData text="등록된 작업공간이 없습니다." />
      </BookmarksView>
    </BookmarksStyled>
  );
};

export default Bookmarks;
