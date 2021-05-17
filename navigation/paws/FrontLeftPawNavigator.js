import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FrontLeftPawScreen, { screenOptions as frontLeftPawScreenOptions } from '../../screens/FrontLeftPawScreen';
import FrontLeftPawSummaryScreen, { screenOptions as frontLeftPawSummaryScreenOptions } from '../../screens/FrontLeftPawSummaryScreen';
import FrontLeftPawCompleteScreen, { screenOptions as frontLeftPawCompleteScreenOptions } from '../../screens/FrontLeftPawCompleteScreen';

const FrontLeftPawStack = createStackNavigator();

const FrontLeftPawNavigator = () => {
  return <FrontLeftPawStack.Navigator screenOptions={DefaultStackNavOptions}>
    <FrontLeftPawStack.Screen name="FrontLeftPawChecker" component={FrontLeftPawScreen} options={frontLeftPawScreenOptions} />
    <FrontLeftPawStack.Screen name="FrontLeftPawSummary" component={FrontLeftPawSummaryScreen} options={frontLeftPawSummaryScreenOptions} />
    <FrontLeftPawStack.Screen name="FrontLeftPawComplete" component={FrontLeftPawCompleteScreen} options={frontLeftPawCompleteScreenOptions} />
  </FrontLeftPawStack.Navigator>
};

export default FrontLeftPawNavigator;