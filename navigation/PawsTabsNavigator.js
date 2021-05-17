import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FrontLeftPawNavigator from './paws/FrontLeftPawNavigator';
import FrontRightPawNavigator from './paws/FrontRightPawNavigator';

import BackLeftPawScreen from '../screens/BackLeftPawScreen';
import BackLeftPawSummaryScreen from '../screens/BackLeftPawSummaryScreen';
import BackLeftPawCompleteScreen from '../screens/BackLeftPawCompleteScreen';
import BackRightPawScreen from '../screens/BackRightPawScreen';
import BackRightPawSummaryScreen from '../screens/BackRightPawSummaryScreen';
import BackRightPawCompleteScreen from '../screens/BackRightPawCompleteScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const BackLeftPawNavigator = createStackNavigator({
  BackLeftPawChecker: BackLeftPawScreen,
  BackLeftPawSummary: BackLeftPawSummaryScreen,
  BackLeftPawComplete: BackLeftPawCompleteScreen
}, {
  defaultNavigationOptions: {
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.redColor,
    }
  }
});

const BackRightPawNavigator = createStackNavigator({
  BackRightPawChecker: BackRightPawScreen,
  BackRightPawSummary: BackRightPawSummaryScreen,
  BackRightPawComplete: BackRightPawCompleteScreen
}, {
  defaultNavigationOptions: {
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.violetColor,
    }
  }
});

const SessionTabNavigator = createMaterialBottomTabNavigator(
  {
    FrontLeftPaw: {
      screen: FrontLeftPawNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (<Ionicons
            name="paw"
            size={25}
            color={tabInfo.tintColor}
          />);
        },
        tabBarColor: Colors.greenColor,
        tabBarLabel: <Text style={{ fontFamily: 'roboto-medium' }}>Front Left Paw</Text>
      }
    },
    FrontRightPaw: {
      screen: FrontRightPawNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (<Ionicons
            name="paw"
            size={25}
            color={tabInfo.tintColor}
          />);
        },
        tabBarColor: Colors.blueColor,
        tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Front Right Paw</Text>
      }
    },
    BackLeftPaw: {
      screen: BackLeftPawNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (<Ionicons
            name="paw"
            size={25}
            color={tabInfo.tintColor}
          />);
        },
        tabBarColor: Colors.redColor,
        tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Back Left Paw</Text>
      }
    },
    BackRightPaw: {
      screen: BackRightPawNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (<Ionicons
            name="paw"
            size={25}
            color={tabInfo.tintColor}
          />);
        },
        tabBarColor: Colors.violetColor,
        tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Back Right Paw</Text>
      }
    }
  },
  {
    activeColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.greenColor
    }
  }
);

export default createAppContainer(SessionTabNavigator);