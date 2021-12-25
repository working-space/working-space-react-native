import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from 'src/screens/Login/Login';
import Signup from 'src/screens/Signup/Signup';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
