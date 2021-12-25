import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Typo from 'src/components/Typo/Typo';
import { RootStackParamList } from 'src/navigators/types';
import { Align, FontType } from 'src/utils/font';

import { LoginStyled } from './Login.styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const Login = ({ navigation }: Props) => {
  const onLogin = () => {
    navigation.navigate('Signup');
  };

  return (
    <LoginStyled>
      <Typo font={FontType.BOLD_HEAD} align={Align.CENTER} onPress={onLogin}>
        로그인
      </Typo>
    </LoginStyled>
  );
};

export default Login;
