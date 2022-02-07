import React from 'react';
import { Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import { privacyPolicyText, termsText } from 'src/constants/terms';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  SettingsStyled,
  SettingsView,
  TextButton,
  LinkButton,
  linkButtonTextStyle,
  TextButtonLine,
} from './Settings.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const Settings = ({ navigation: { navigate, goBack } }: Props) => {
  return (
    <SettingsStyled>
      <Header
        left={
          <Header.Button onPress={goBack}>
            <BackIcon />
          </Header.Button>
        }
      />
      <SettingsView>
        <TextButton onPress={() => navigate('Terms', { content: termsText })}>
          <Typo type={FontType.REGULAR_14}>이용 약관</Typo>
        </TextButton>
        <TextButton onPress={() => navigate('Terms', { content: privacyPolicyText })}>
          <Typo type={FontType.REGULAR_14}>개인 정보 처리 방침</Typo>
        </TextButton>
        <TextButtonLine />
        <TextButton>
          <Typo type={FontType.REGULAR_14}>도움이 필요하신가요?</Typo>
          <LinkButton onPress={() => Linking.openURL('https://open.kakao.com/o/gc0HfOid')}>
            <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300} style={linkButtonTextStyle}>
              채팅으로 문의하기
            </Typo>
          </LinkButton>
        </TextButton>
        <TextButtonLine />
        <TextButton>
          <Typo type={FontType.REGULAR_14}>로그아웃</Typo>
        </TextButton>
        <TextButton>
          <Typo type={FontType.REGULAR_14}>회원탈퇴</Typo>
        </TextButton>
      </SettingsView>
    </SettingsStyled>
  );
};

export default Settings;
