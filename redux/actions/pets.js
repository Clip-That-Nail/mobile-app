import * as FileSystem from 'expo-file-system';

import petsTypes from '../types/pets';
import { fetchPets, insertPet, updatePet as updatePetInDB, removePet as removePetFromDB } from '../../helpers/db';

export const loadPets = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPets();
      dispatch({ type: petsTypes.SET_PETS, pets: dbResult.rows });
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
      console.log('action type : ', petsTypes.ADD_PET);

      dispatch({ type: petsTypes.ADD_PET, petData: { id: dbResult.insertId, name, type, breed, image: newPath } });
    } catch (err) {
      console.log('addPet error:', err);
      throw err;
    }
  }
};

export const updatePet = (petId, name, type, breed, image) => {
  return async (dispatch) => {

    try {
      let updatedImage = '';

      if (image.new !== image.old) {
        const fileName = image.new.split('/').pop();
        updatedImage = FileSystem.documentDirectory + fileName;
        await FileSystem.deleteAsync(image.old);
        await FileSystem.moveAsync({
          from: image.new,
          to: updatedImage
        });
      } else {
        updatedImage = image.old;
      }
      const dbResult = await updatePetInDB(petId, name, type, breed, updatedImage);

      dispatch({ type: petsTypes.UPDATE_PET, petData: { id: petId, name, type, breed, image: updatedImage } });
    } catch (err) {
      console.log('updatePet error:', err);
      throw err;
    }
  }
};

export const removePet = (petId) => {
  return async (dispatch, getState) => {
    try {
      const imageToRemove = getState().pets.pets.find(pet => pet.id === petId).imageUri;

      await removePetFromDB(petId);

      await FileSystem.deleteAsync(imageToRemove);

      dispatch({ type: petsTypes.REMOVE_PET, petId });
    } catch (err) {
      console.log('removePet error:', err);
      throw err;
    }
  }
};