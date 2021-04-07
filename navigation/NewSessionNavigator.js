import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SessionNavigator from './SessionNavigator';
import PreNewSessionNavigator from './PreNewSessionNavigator';
import PostNewSessionNavigator from './PostNewSessionNavigator';

const NewSessionNavigator = createSwitchNavigator({
  PreNewSession: PreNewSessionNavigator,
  Session: SessionNavigator,
  PostNewSession: PostNewSessionNavigator,
}, {});

export default createAppContainer(NewSessionNavigator);