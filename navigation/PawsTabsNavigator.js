import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FrontLeftPawNavigator from './paws/FrontLeftPawNavigator';
import FrontRightPawNavigator from './paws/FrontRightPawNavigator';
import BackLeftPawNavigator from './paws/BackLeftPawNavigator';
import BackRightPawNavigator from './paws/BackRightPawNavigator';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const PawsTabs = createMaterialBottomTabNavigator();

const PawsTabsNavigator = () => {
  return <PawsTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return <Ionicons name="paw" size={25} color={color} />;
      },
      ...DefaultStackNavOptions
    })}
    shifting={true}
  >
    <PawsTabs.Screen name="FrontLeftPaw" component={FrontLeftPawNavigator} options={{
      tabBarColor: Colors.greenColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto-medium' }}>Front Left Paw</Text>
    }} />
    <PawsTabs.Screen name="FrontRightPaw" component={FrontRightPawNavigator} options={{
      tabBarColor: Colors.blueColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Front Right Paw</Text>
    }} />
    <PawsTabs.Screen name="BackLeftPaw" component={BackLeftPawNavigator} options={{
      tabBarColor: Colors.redColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Back Left Paw</Text>
    }} />
    <PawsTabs.Screen name="BackRightPaw" component={BackRightPawNavigator} options={{
      tabBarColor: Colors.violetColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Back Right Paw</Text>
    }} />
  </PawsTabs.Navigator>
};

export default PawsTabsNavigator;