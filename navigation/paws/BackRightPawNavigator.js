import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BackRightPawScreen, { screenOptions as backRightPawScreenOptions } from '../../screens/NewSession/BackRightPawScreen';
import BackRightPawSummaryScreen, { screenOptions as backRightPawSummaryScreenOptions } from '../../screens/NewSession/BackRightPawSummaryScreen';
import BackRightPawCompleteScreen, { screenOptions as backRightPawCompleteScreenOptions } from '../../screens/NewSession/BackRightPawCompleteScreen';
import DefaultStackNavOptions from '../DefaultStackNavOptions';
import Colors from '../../constants/Colors';

const BackRightPawStack = createStackNavigator();

const BackRightPawNavigator = () => {
  return <BackRightPawStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.violetColor,
    }
  }}>
    <BackRightPawStack.Screen name="BackRightPawChecker" component={BackRightPawScreen} options={backRightPawScreenOptions} />
    <BackRightPawStack.Screen name="BackRightPawSummary" component={BackRightPawSummaryScreen} options={backRightPawSummaryScreenOptions} />
    <BackRightPawStack.Screen name="BackRightPawComplete" component={BackRightPawCompleteScreen} options={backRightPawCompleteScreenOptions} />
  </BackRightPawStack.Navigator>
};

export default BackRightPawNavigator;