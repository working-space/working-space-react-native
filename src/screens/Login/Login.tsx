import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { Align, FontType } from 'src/utils/font';

import { LoginStyled } from './Login.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Login = ({ navigation }: Props) => {
  const onLogin = () => {
    navigation.navigate('Signup');
  };

  return (
    <LoginStyled>
      <Typo type={FontType.BOLD_24} align={Align.CENTER} onPress={onLogin}>
        로그인
      </Typo>
    </LoginStyled>
  );
};

export default Login;
