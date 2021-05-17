import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen, { screenOptions } from '../screens/SettingsScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return <SettingsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.violetColor,
    }
  }}>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} options={screenOptions} />
  </SettingsStack.Navigator>
};

export default SettingsNavigator;