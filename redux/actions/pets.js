import * as FileSystem from 'expo-file-system';

import petsTypes from '../types/pets';
import { fetchPets, insertPet, updatePet as updatePetInDB } from '../../helpers/db';

export const loadPets = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPets();
      dispatch({ type: petsTypes.SET_DOGS, pets: dbResult.rows });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const addPet = (name, type, breed, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPet(name, type, breed, newPath);
      console.log('addPet result:', dbResult);
      console.log('action type : ', petsTypes.ADD_DOG);

      dispatch({ type: petsTypes.ADD_DOG, petData: { id: dbResult.insertId, name, type, breed, image: newPath }});
    } catch (err) {
      console.log('addPet error:', err);
      throw err;
    }
  }
};

export const updatePet = (petId, name, type, breed, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await updatePetInDB(petId, name, type, breed, newPath);
      console.log('updatePet result:', dbResult);
      console.log('action type : ', petsTypes.UPDATE_DOG);

      dispatch({ type: petsTypes.UPDATE_DOG, petData: { id: dbResult.insertId, name, type, breed, image: newPath }});
    } catch (err) {
      console.log('updatePet error:', err);
      throw err;
    }
  }
};