import * as FileSystem from 'expo-file-system';

import animalsTypes from '../types/animals';
import { fetchAnimals, insertAnimal } from '../../helpers/db';

export const loadAnimals = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchAnimals();
      dispatch({ type: animalsTypes.SET_DOGS, animals: dbResult.rows });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const addAnimal = (name, type, breed, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertAnimal(name, type, breed, newPath);
      console.log('addAnimal result:', dbResult);
      console.log('action type : ', animalsTypes.ADD_DOG);

      dispatch({ type: animalsTypes.ADD_DOG, animalData: { id: dbResult.insertId, name, type, breed, image: newPath }});
    } catch (err) {
      console.log('addAnimal error:', err);
      throw err;
    }
  }
};