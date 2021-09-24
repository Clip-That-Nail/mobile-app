import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FrontRightPawScreen, { screenOptions as frontRightPawScreenOptions } from '../../screens/NewSession/FrontRightPawScreen';
import FrontRightPawSummaryScreen, { screenOptions as frontRightPawSummaryScreenOptions } from '../../screens/NewSession/FrontRightPawSummaryScreen';
import FrontRightPawCompleteScreen, { screenOptions as frontRightPawCompleteScreenOptions } from '../../screens/NewSession/FrontRightPawCompleteScreen';
import DefaultStackNavOptions from '../DefaultStackNavOptions';
import Colors from '../../constants/Colors';

const FrontRightPawStack = createStackNavigator();

const FrontRightPawNavigator = () => {
  return <FrontRightPawStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.blueColor,
    }
  }}>
    <FrontRightPawStack.Screen name="FrontRightPawChecker" component={FrontRightPawScreen} options={frontRightPawScreenOptions} />
    <FrontRightPawStack.Screen name="FrontRightPawSummary" component={FrontRightPawSummaryScreen} options={frontRightPawSummaryScreenOptions} />
    <FrontRightPawStack.Screen name="FrontRightPawComplete" component={FrontRightPawCompleteScreen} options={frontRightPawCompleteScreenOptions} />
  </FrontRightPawStack.Navigator>
};

export default FrontRightPawNavigator;