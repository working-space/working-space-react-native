import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuth from 'src/hooks/useAuth';
import Detail from 'src/screens/Detail/Detail';
import Login from 'src/screens/Login/Login';
import Main from 'src/screens/Main/Main';
import Map from 'src/screens/Map/Map';
import Profile from 'src/screens/Profile/Profile';
import Signup from 'src/screens/Signup/Signup';
import Bookmarks from 'src/screens/User/Bookmarks/Bookmarks';
import Comments from 'src/screens/User/Comments/Comments';
import Favorites from 'src/screens/User/Favorites/Favorites';
import Settings from 'src/screens/User/Settings/Settings';
import Terms from 'src/screens/User/Terms/Terms';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();

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
          <Stack.Screen
            name="Map"
            component={Map}
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
