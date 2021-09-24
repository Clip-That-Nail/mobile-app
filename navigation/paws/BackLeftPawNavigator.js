import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BackLeftPawScreen, { screenOptions as backLeftPawScreenOptions } from '../../screens/NewSession/BackLeftPawScreen';
import BackLeftPawSummaryScreen, { screenOptions as backLeftPawSummaryScreenOptions } from '../../screens/NewSession/BackLeftPawSummaryScreen';
import BackLeftPawCompleteScreen, { screenOptions as backLeftPawCompleteScreenOptions } from '../../screens/NewSession/BackLeftPawCompleteScreen';
import DefaultStackNavOptions from '../DefaultStackNavOptions';
import Colors from '../../constants/Colors';

const BackLeftPawStack = createStackNavigator();

const BackLeftPawNavigator = () => {
  return <BackLeftPawStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.redColor,
    }
  }}>
    <BackLeftPawStack.Screen name="BackLeftPawChecker" component={BackLeftPawScreen} options={backLeftPawScreenOptions} />
    <BackLeftPawStack.Screen name="BackLeftPawSummary" component={BackLeftPawSummaryScreen} options={backLeftPawSummaryScreenOptions} />
    <BackLeftPawStack.Screen name="BackLeftPawComplete" component={BackLeftPawCompleteScreen} options={backLeftPawCompleteScreenOptions} />
  </BackLeftPawStack.Navigator>
};

export default BackLeftPawNavigator;