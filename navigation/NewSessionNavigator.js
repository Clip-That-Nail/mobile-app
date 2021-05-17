import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PawsTabsNavigator from './PawsTabsNavigator';
import PreNewSessionNavigator from './PreNewSessionNavigator';
import PostNewSessionNavigator from './PostNewSessionNavigator';

const NewSessionStack = createStackNavigator();

const NewSessionNavigator = () => {
  return <NewSessionStack.Navigator screenOptions={DefaultStackNavOptions}>
    <NewSessionStack.Screen name="PreNewSession" component={PreNewSessionNavigator} />
    <NewSessionStack.Screen name="Paws" component={PawsTabsNavigator} />
    <NewSessionStack.Screen name="PostNewSession" component={PostNewSessionNavigator} />
  </NewSessionStack.Navigator>
};

export default NewSessionNavigator;