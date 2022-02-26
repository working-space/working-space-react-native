import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import Header from 'src/components/Header/Header';
import NoneData from 'src/components/NoneData/NoneData';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { FontType } from 'src/utils/font';
import { CommentsStyled, CommentsView } from './Comments.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Comments'>;

const Comments = ({ navigation: { goBack } }: Props) => {
  return (
    <CommentsStyled>
      <Header
        left={
          <Header.Button onPress={goBack}>
            <BackIcon width="24" height="24" />
          </Header.Button>
        }
      />
      <CommentsView>
        <Typo type={FontType.BOLD_24}>작성한 리뷰</Typo>
        <NoneData text="작성한 리뷰가 없습니다." />
      </CommentsView>
    </CommentsStyled>
  );
};

export default Comments;
