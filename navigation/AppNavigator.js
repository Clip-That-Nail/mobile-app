import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeNavigator from './HomeNavigator';
import NewSessionNavigator from './NewSessionNavigator';

import Colors from '../constants/Colors';

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeNavigator,
  },
  NewSession: {
    screen: NewSessionNavigator,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  activeColor: 'white',
  shifting: true,
  barStyle: {
    backgroundColor: Colors.greenColor
  }
});

export default createAppContainer(AppNavigator);