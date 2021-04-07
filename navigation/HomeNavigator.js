import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SessionsNavigator from './SessionsNavigator';
import SettingsNavigator from './SettingsNavigator';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const HomeNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (<Ionicons
          name="home"
          size={25}
          color={tabInfo.tintColor}
        />);
      },
      tabBarColor: Colors.greenColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Home</Text>
    }
  },
  Sessions: {
    screen: SessionsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (<Ionicons
          name="paw-outline"
          size={25}
          color={tabInfo.tintColor}
        />);
      },
      tabBarColor: Colors.blueColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Sessions</Text>
    }
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (<Ionicons
          name="settings-sharp"
          size={25}
          color={tabInfo.tintColor}
        />);
      },
      tabBarColor: Colors.violetColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Settings</Text>
    }
  }
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(HomeNavigator);