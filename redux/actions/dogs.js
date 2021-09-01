import * as FileSystem from 'expo-file-system';

import dogsTypes from '../types/dogs';
import { fetchDogs, insertDog } from '../../helpers/db';

export const loadDogs = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchDogs();
      dispatch({ type: dogsTypes.SET_DOGS, dogs: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const addDog = (name, breed, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertDog(name, breed, newPath);
      console.log('addDog result:', dbResult);
      console.log('action type : ', dogsTypes.ADD_DOG);

      dispatch({ type: dogsTypes.ADD_DOG, dogData: { id: dbResult.insertId, name: name, breed: breed, image: newPath }});
    } catch (err) {
      console.log('addDog error:', err);
      throw err;
    }
  }
};