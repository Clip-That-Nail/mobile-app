import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';

import Colors from '../constants/Colors';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  Settings: SettingsNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.greenColor,
    labelStyle: {
      fontFamily: 'roboto'
    }
  }
});

export default createAppContainer(AppNavigator);