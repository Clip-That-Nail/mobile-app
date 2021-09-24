import petsTypes from '../types/pets';
import Pet from '../../models/pet';

const initialState = {
  pets: []
}

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case petsTypes.SET_DOGS:
      return {
        pets: action.pets.map(pet => new Pet(pet.id.toString(), pet.name, pet.type, pet.breed, pet.imageUri))
      }
    case petsTypes.ADD_DOG:
      const newPet = new Pet(
        action.petData.id.toString(),
        action.petData.name,
        action.petData.type,
        action.petData.breed,
        action.petData.image,
      );
      return {
        pets: state.pets.concat(newPet)
      }
    default:
      return state;
  }
};

export default petsReducer;