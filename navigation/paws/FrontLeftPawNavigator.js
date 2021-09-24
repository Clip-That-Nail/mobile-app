import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FrontLeftPawScreen, { screenOptions as frontLeftPawScreenOptions } from '../../screens/NewSession/FrontLeftPawScreen';
import FrontLeftPawSummaryScreen, { screenOptions as frontLeftPawSummaryScreenOptions } from '../../screens/NewSession/FrontLeftPawSummaryScreen';
import FrontLeftPawCompleteScreen, { screenOptions as frontLeftPawCompleteScreenOptions } from '../../screens/NewSession/FrontLeftPawCompleteScreen';
import DefaultStackNavOptions from '../DefaultStackNavOptions';
import Colors from '../../constants/Colors';

const FrontLeftPawStack = createStackNavigator();

const FrontLeftPawNavigator = () => {
  return <FrontLeftPawStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
      backgroundColor: Colors.greenColor,
    }
  }}>
    <FrontLeftPawStack.Screen name="FrontLeftPawChecker" component={FrontLeftPawScreen} options={frontLeftPawScreenOptions} />
    <FrontLeftPawStack.Screen name="FrontLeftPawSummary" component={FrontLeftPawSummaryScreen} options={frontLeftPawSummaryScreenOptions} />
    <FrontLeftPawStack.Screen name="FrontLeftPawComplete" component={FrontLeftPawCompleteScreen} options={frontLeftPawCompleteScreenOptions} />
  </FrontLeftPawStack.Navigator>
};

export default FrontLeftPawNavigator;