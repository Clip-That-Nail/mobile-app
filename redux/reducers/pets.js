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
        pets: action.pets.map(pet => new Pet(pet.id.toString(), pet.name, pet.type, pet.breed, pet.imageUri))
      }
    case petsTypes.ADD_PET:
      const newPet = new Pet(
        action.petData.id.toString(),
        action.petData.name,
        action.petData.type,
        action.petData.breed,
        action.petData.image,
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
            )
          }
          return pet;
        })
      }
    default:
      return state;
  }
};

export default petsReducer;