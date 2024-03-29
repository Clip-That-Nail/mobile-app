import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SessionsListScreen, { screenOptions as sessionsListScreenOptions } from '../screens/Sessions/SessionsListScreen';
import SessionDetailScreen, { screenOptions as sessionDetailScreenOptions } from '../screens/Sessions/SessionDetailScreen';
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
    <SessionsStack.Screen name="Sessions" component={SessionsListScreen} options={sessionsListScreenOptions} />
    <SessionsStack.Screen name="SessionDetail" component={SessionDetailScreen} options={sessionDetailScreenOptions} />
  </SessionsStack.Navigator>
};

export default SessionsNavigator;