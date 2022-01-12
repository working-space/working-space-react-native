import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RecoilRoot } from 'recoil';
import MainNavigator from 'src/navigators/MainNavigator';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
