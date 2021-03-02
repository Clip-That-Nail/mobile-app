import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import SessionScreen from '../screens/SessionScreen';
import PawScreen from '../screens/PawScreen';
import SummaryScreen from '../screens/SummaryScreen';

import Colors from '../constants/Colors';

const SessionNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Session: {
    screen: SessionScreen,
  },
  Paw: {
    screen: PawScreen,
  },
  Summary: {
    screen: SummaryScreen,
  },
}, {
  defaultNavigationOptions: {
  }
});

export default createAppContainer(SessionNavigator);