import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostNewSessionScreen, {screenOptions as postNewSessionScreenOptions} from '../screens/NewSession/PostNewSessionScreen';

import DefaultStackNavOptions from './DefaultStackNavOptions';

const PostSessionStack = createStackNavigator();

const PostNewSessionNavigator = () => {
  return <PostSessionStack.Navigator screenOptions={DefaultStackNavOptions}>
    <PostSessionStack.Screen name="PostNewSession" component={PostNewSessionScreen} options={postNewSessionScreenOptions} />
  </PostSessionStack.Navigator>
};

export default PostNewSessionNavigator;