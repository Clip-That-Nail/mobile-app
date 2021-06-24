import React from 'react';
import { Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SessionsNavigator from './SessionsNavigator';
import DogsNavigator from './DogsNavigator';
import SettingsNavigator from './SettingsNavigator';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const HomeBottomTabs = createMaterialBottomTabNavigator();

const HomeTabsNavigator = () => {
  return <HomeBottomTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Sessions') {
          iconName = focused ? 'paw' : 'paw-outline';
        } else if (route.name === 'Dogs') {
          iconName = focused ? 'dog' : 'dog';
          return <MaterialCommunityIcons name={iconName} size={25} color={color} />;
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={25} color={color} />;
      },
      ...DefaultStackNavOptions
    })}
    shifting={true}
  >
    <HomeBottomTabs.Screen name="Home" component={HomeScreen} options={{
      tabBarColor: Colors.greenColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Home</Text>
    }} />
    <HomeBottomTabs.Screen name="Sessions" component={SessionsNavigator} options={{
      tabBarColor: Colors.blueColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Sessions</Text>
    }} />
    <HomeBottomTabs.Screen name="Dogs" component={DogsNavigator} options={{
      tabBarColor: Colors.redColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Doggos</Text>
    }} />
    <HomeBottomTabs.Screen name="Settings" component={SettingsNavigator} options={{
      tabBarColor: Colors.violetColor,
      tabBarLabel: <Text style={{ fontFamily: 'roboto' }}>Settings</Text>
    }} />
  </HomeBottomTabs.Navigator>
};

export default HomeTabsNavigator;