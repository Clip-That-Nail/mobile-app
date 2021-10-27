import petsTypes from '../types/pets';
import Pet from '../../models/pet';

const initialState = {
  pets: []
}

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case petsTypes.SET_PETS:
      return {
        ...state,
        pets: action.pets.map(pet => new Pet(pet.id.toString(), pet.name, pet.type, pet.breed, pet.imageUri, pet.disabled, pet.disabilities))
      }
    case petsTypes.ADD_PET:
      const newPet = new Pet(
        action.petData.id.toString(),
        action.petData.name,
        action.petData.type,
        action.petData.breed,
        action.petData.image,
        action.petData.disabled,
        action.petData.disabilities,
      );
      return {
        ...state,
        pets: state.pets.concat(newPet)
      }
    case petsTypes.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map(pet => {
          if (pet.id === action.petData.id.toString()) {
            return new Pet(
              action.petData.id.toString(),
              action.petData.name,
              action.petData.type,
              action.petData.breed,
              action.petData.image,
              action.petData.disabled,
              action.petData.disabilities,
            )
          }
          return pet;
        })
      }
    case petsTypes.REMOVE_PET:
      return {
        ...state,
        pets: state.pets.filter(pet => pet.id !== action.petId.toString())
      }
    default:
      return state;
  }
};

export default petsReducer;