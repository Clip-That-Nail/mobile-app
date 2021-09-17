import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DogsListScreen, { screenOptions as dogsListScreenOptions } from '../screens/Dogs/DogsListScreen';
import AddNewDogScreen, { screenOptions as addNewDogScreenOptions } from '../screens/Dogs/AddNewDogScreen';
import DogDetailScreen, { screenOptions as dogDetailScreenOptions } from '../screens/Dogs/DogDetailScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const SessionsStack = createStackNavigator();

const DogsNavigator = () => {
  return <SessionsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
        backgroundColor: Colors.redColor,
      }
    }}>
    <SessionsStack.Screen name="DogsList" component={DogsListScreen} options={dogsListScreenOptions} />
    <SessionsStack.Screen name="AddNewDog" component={AddNewDogScreen} options={addNewDogScreenOptions} />
    <SessionsStack.Screen name="DogDetail" component={DogDetailScreen} options={dogDetailScreenOptions} />
  </SessionsStack.Navigator>
};

export default DogsNavigator;