import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PreNewSessionScreen from '../screens/PreNewSessionScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

const PreNewSessionNavigator = createStackNavigator({
  PreNewSession: {
    screen: PreNewSessionScreen,
  }
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(PreNewSessionNavigator);