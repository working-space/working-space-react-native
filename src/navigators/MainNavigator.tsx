import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from 'src/screens/Detail/Detail';
import Main from 'src/screens/Main/Main';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
