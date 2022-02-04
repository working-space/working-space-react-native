import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import Header from 'src/components/Header/Header';
import NoneData from 'src/components/NoneData/NoneData';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { FontType } from 'src/utils/font';
import { FavoritesStyled, FavoritesView } from './Favorites.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

const Favorites = ({ navigation: { goBack } }: Props) => {
  return (
    <FavoritesStyled>
      <Header
        left={
          <Header.Button onPress={() => goBack()}>
            <BackIcon />
          </Header.Button>
        }
      />
      <FavoritesView>
        <Typo type={FontType.BOLD_24}>좋아요 누른 작업공간</Typo>
        <NoneData text="등록된 작업공간이 없습니다." />
      </FavoritesView>
    </FavoritesStyled>
  );
};

export default Favorites;
