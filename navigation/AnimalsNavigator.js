import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AnimalsListScreen, { screenOptions as animalsListScreenOptions } from '../screens/Animals/AnimalsListScreen';
import AddNewAnimalScreen, { screenOptions as addNewAnimalScreenOptions } from '../screens/Animals/AddNewAnimalScreen';
import AnimalDetailScreen, { screenOptions as animalDetailScreenOptions } from '../screens/Animals/AnimalDetailScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const AnimalsStack = createStackNavigator();

const AnimalsNavigator = () => {
  return <AnimalsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
        backgroundColor: Colors.redColor,
      }
    }}>
    <AnimalsStack.Screen name="AnimalsList" component={AnimalsListScreen} options={animalsListScreenOptions} />
    <AnimalsStack.Screen name="AddNewAnimal" component={AddNewAnimalScreen} options={addNewAnimalScreenOptions} />
    <AnimalsStack.Screen name="AnimalDetail" component={AnimalDetailScreen} options={animalDetailScreenOptions} />
  </AnimalsStack.Navigator>
};

export default AnimalsNavigator;