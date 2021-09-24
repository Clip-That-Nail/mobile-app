import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PawsTabsNavigator from './PawsTabsNavigator';
import PostNewSessionNavigator from './PostNewSessionNavigator';

import Colors from '../constants/Colors';

const NewSessionStack = createStackNavigator();

const NewSessionNavigator = () => {
  return <NewSessionStack.Navigator screenOptions={{ headerShown: false, headerBackground: Colors.greenColor }}>
    <NewSessionStack.Screen name="Paws" component={PawsTabsNavigator} />
    <NewSessionStack.Screen name="PostNewSession" component={PostNewSessionNavigator} />
  </NewSessionStack.Navigator>
};

export default NewSessionNavigator;