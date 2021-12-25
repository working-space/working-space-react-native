import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginNavigator from 'src/navigators/LoginNavigator';
import MainNavigator from 'src/navigators/MainNavigator';

const App = () => {
  const isLoggedIn = false;

  return <NavigationContainer>{isLoggedIn ? <MainNavigator /> : <LoginNavigator />}</NavigationContainer>;
};

export default App;
