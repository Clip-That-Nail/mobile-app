import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SettingsScreen from '../screens/SettingsScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const SettingsNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen
  },
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(SettingsNavigator);