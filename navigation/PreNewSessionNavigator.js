import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreNewSessionScreen, { screenOptions as preNewSessionScreenOptions } from '../screens/PreNewSessionScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

const PreNewSessionStack = createStackNavigator();

const PreNewSessionNavigator = () => {
  return <PreNewSessionStack.Navigator screenOptions={DefaultStackNavOptions}>
    <PreNewSessionStack.Screen name="PreNewSession" component={PreNewSessionScreen} options={preNewSessionScreenOptions} />
  </PreNewSessionStack.Navigator>
};

export default PreNewSessionNavigator;