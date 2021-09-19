import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AnimalsListScreen, { screenOptions as animalsListScreenOptions } from '../screens/Animals/AnimalsListScreen';
import AddNewAnimalScreen, { screenOptions as addNewAnimalScreenOptions } from '../screens/Animals/AddNewAnimalScreen';
import AnimalDetailScreen, { screenOptions as animalDetailScreenOptions } from '../screens/Animals/AnimalDetailScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const SessionsStack = createStackNavigator();

const AnimalsNavigator = () => {
  return <SessionsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
        backgroundColor: Colors.redColor,
      }
    }}>
    <SessionsStack.Screen name="AnimalsList" component={AnimalsListScreen} options={animalsListScreenOptions} />
    <SessionsStack.Screen name="AddNewAnimal" component={AddNewAnimalScreen} options={addNewAnimalScreenOptions} />
    <SessionsStack.Screen name="AnimalDetail" component={AnimalDetailScreen} options={animalDetailScreenOptions} />
  </SessionsStack.Navigator>
};

export default AnimalsNavigator;