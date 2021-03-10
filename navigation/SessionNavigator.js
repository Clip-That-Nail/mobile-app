import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FrontLeftPawScreen from '../screens/FrontLeftPawScreen';
import FrontLeftPawSummaryScreen from '../screens/FrontLeftPawSummaryScreen';
import FrontRightPawScreen from '../screens/FrontRightPawScreen';
import FrontRightPawSummaryScreen from '../screens/FrontRightPawSummaryScreen';
import BackLeftPawScreen from '../screens/BackLeftPawScreen';
import BackLeftPawSummaryScreen from '../screens/BackLeftPawSummaryScreen';
import BackRightPawScreen from '../screens/BackRightPawScreen';
import BackRightPawSummaryScreen from '../screens/BackRightPawSummaryScreen';
import SummaryScreen from '../screens/SummaryScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const FrontLeftPawNavigator = createStackNavigator({
  FrontLeftPawChecker: FrontLeftPawScreen,
  FrontLeftPawSummary: FrontLeftPawSummaryScreen
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

const FrontRightPawNavigator = createStackNavigator({
  FrontRightPawChecker: {
    screen: FrontRightPawScreen,
    navigationOptions: {
      headerLeft: () => { }
    }
  },
  FrontRightPawSummary: FrontRightPawSummaryScreen
}, {
  defaultNavigationOptions: {
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.blueColor,
    }
  }
});

const BackLeftPawNavigator = createStackNavigator({
  BackLeftPawChecker: {
    screen: BackLeftPawScreen,
    navigationOptions: {
      headerLeft: () => { }
    }
  },
  BackLeftPawSummary: BackLeftPawSummaryScreen
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
  BackRightPawChecker: {
    screen: BackRightPawScreen,
    navigationOptions: {
      headerLeft: () => { }
    }
  },
  BackRightPawSummary: BackRightPawSummaryScreen
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