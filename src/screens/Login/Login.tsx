import React from 'react';
import { login, KakaoOAuthToken, getProfile as getKakaoProfile, KakaoProfile } from '@react-native-seoul/kakao-login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LoginIllustURL from 'src/assets/images/login_illust.jpg';
import AutoFitImage from 'src/components/AutoFitImage/AutoFitImage';
import Typo from 'src/components/Typo/Typo';
import useAuth from 'src/hooks/useAuth';
import { RootStackParamList } from 'src/navigators/types';
import { Align, FontType } from 'src/utils/font';
import {
  LoginStyled,
  LoginView,
  LoginButtonStyled,
  LoginButton,
  LoginButtonIcon,
  LoginButtonImage,
} from './Login.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Login = ({ navigation }: Props) => {
  const { fetchToken } = useAuth();

  const onLogin = async (): Promise<void> => {
    try {
      const token: KakaoOAuthToken = await login();
      const profile: KakaoProfile = await getKakaoProfile();
      fetchToken(token.accessToken);
      navigation.replace('Signup', {
        name: profile.nickname,
        profileImageURL: profile.profileImageUrl,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <LoginStyled>
      <LoginView>
        <Typo type={FontType.BOLD_24} align={Align.CENTER}>
          원하는 작업 공간을{'\n'}직접 찾아보세요!
        </Typo>
        <AutoFitImage source={LoginIllustURL} />
        <LoginButtonStyled>
          <LoginButton onPress={onLogin}>
            <LoginButtonIcon>
              <LoginButtonImage source={require('src/assets/images/kakao_button.png')} />
            </LoginButtonIcon>
            <Typo type={FontType.BOLD_14} align={Align.CENTER}>
              카카오 로그인
            </Typo>
          </LoginButton>
        </LoginButtonStyled>
      </LoginView>
    </LoginStyled>
  );
};

export default Login;
