import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SessionTabNavigator from './SessionNavigator';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewSession: {
    screen: SessionTabNavigator,
    navigationOptions: {
      // headerTitle: 'New Clipping Session',
      headerShown: false
    }
  }
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(HomeNavigator);