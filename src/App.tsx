import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RecoilRoot } from 'recoil';
import LoginNavigator from 'src/navigators/LoginNavigator';
import MainNavigator from 'src/navigators/MainNavigator';

const App = () => {
  const isLoggedIn = true;

  return (
    <RecoilRoot>
      <NavigationContainer>{isLoggedIn ? <MainNavigator /> : <LoginNavigator />}</NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
