import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from 'src/screens/Detail/Detail';
import Login from 'src/screens/Login/Login';
import Main from 'src/screens/Main/Main';
import Signup from 'src/screens/Signup/Signup';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isLoggedIn = false;

  return (
    <Stack.Navigator>
      {isLoggedIn && (
        <>
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
        </>
      )}
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

export default MainNavigator;
