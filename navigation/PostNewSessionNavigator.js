import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PostNewSessionScreen from '../screens/PostNewSessionScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

const PostNewSessionNavigator = createStackNavigator({
  PostNewSession: {
    screen: PostNewSessionScreen,
  }
}, {
  defaultNavigationOptions: DefaultStackNavOptions
});

export default createAppContainer(PostNewSessionNavigator);