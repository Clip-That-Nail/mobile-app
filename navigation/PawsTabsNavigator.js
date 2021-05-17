import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FrontLeftPawNavigator from './paws/FrontLeftPawNavigator';
import FrontRightPawNavigator from './paws/FrontRightPawNavigator';
import BackLeftPawNavigator from './paws/BackLeftPawNavigator';
import BackRightPawNavigator from './paws/BackRightPawNavigator';

import Colors from '../constants/Colors';

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