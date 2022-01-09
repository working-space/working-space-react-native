import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginNavigator from 'src/navigators/LoginNavigator';
import MainNavigator from 'src/navigators/MainNavigator';

const App = () => {
  const isLoggedIn = false;

  // TODO : 메인, 상세 화면 확인을 위한 임시 조치임. 로그인 활성화 시 변경 필요.
  return <NavigationContainer>{!isLoggedIn ? <MainNavigator /> : <LoginNavigator />}</NavigationContainer>;
};

export default App;
