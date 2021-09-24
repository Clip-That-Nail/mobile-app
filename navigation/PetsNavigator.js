import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PetsListScreen, { screenOptions as petsListScreenOptions } from '../screens/Pets/PetsListScreen';
import AddNewPetScreen, { screenOptions as addNewPetScreenOptions } from '../screens/Pets/AddNewPetScreen';
import PetDetailScreen, { screenOptions as petDetailScreenOptions } from '../screens/Pets/PetDetailScreen';
import DefaultStackNavOptions from './DefaultStackNavOptions';
import Colors from '../constants/Colors';

const PetsStack = createStackNavigator();

const PetsNavigator = () => {
  return <PetsStack.Navigator screenOptions={{
    ...DefaultStackNavOptions,
    headerStyle: {
      ...DefaultStackNavOptions.headerStyle,
        backgroundColor: Colors.redColor,
      }
    }}>
    <PetsStack.Screen name="PetsList" component={PetsListScreen} options={petsListScreenOptions} />
    <PetsStack.Screen name="AddNewPet" component={AddNewPetScreen} options={addNewPetScreenOptions} />
    <PetsStack.Screen name="PetDetail" component={PetDetailScreen} options={petDetailScreenOptions} />
  </PetsStack.Navigator>
};

export default PetsNavigator;