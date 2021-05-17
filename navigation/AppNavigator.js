import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabsNavigator from './HomeTabsNavigator';
import NewSessionNavigator from './NewSessionNavigator';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const AppNavigator = props => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, headerBackground: Colors.greenColor }}>
      <Stack.Screen name="Home" component={HomeTabsNavigator} />
      <Stack.Screen name="NewSession" component={NewSessionNavigator} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default AppNavigator;