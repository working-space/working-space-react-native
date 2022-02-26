import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { FontType } from 'src/utils/font';
import { TermsStyled, TermsView } from './Terms.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Terms'>;

const Terms = ({ navigation: { goBack }, route }: Props) => {
  const { content } = route.params;

  return (
    <TermsStyled>
      <Header
        left={
          <Header.Button onPress={goBack}>
            <BackIcon width="24" height="24" />
          </Header.Button>
        }
      />
      <TermsView>
        <Typo type={FontType.REGULAR_14}>{content}</Typo>
      </TermsView>
    </TermsStyled>
  );
};

export default Terms;
