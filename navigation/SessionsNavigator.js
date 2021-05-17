import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SessionsScreen, { screenOptions } from '../screens/SessionsScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const SessionsStack = createStackNavigator();

const SessionsNavigator = () => {
  return <SessionsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.blueColor,
    }
  }}>
    <SessionsStack.Screen name="Sessions" component={SessionsScreen} options={screenOptions} />
  </SessionsStack.Navigator>
};

export default SessionsNavigator;