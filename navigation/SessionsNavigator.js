import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SessionsScreen from '../screens/SessionsScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

import Colors from '../constants/Colors';

const SessionsNavigator = createStackNavigator({
  Sessions: {
    screen: SessionsScreen
  },
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(SessionsNavigator);