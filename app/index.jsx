import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from "./components/Homepage/Homepage";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer style={{ fontFamily: 'Fredoka' }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};