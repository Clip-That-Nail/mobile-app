import animalsTypes from '../types/animals';
import Animal from '../../models/animal';

const initialState = {
  animals: []
}

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case animalsTypes.SET_DOGS:
      return {
        animals: action.animals.map(animal => new Animal(animal.id.toString(), animal.name, animal.type, animal.breed, animal.imageUri))
      }
    case animalsTypes.ADD_DOG:
      const newAnimal = new Animal(
        action.animalData.id.toString(),
        action.animalData.name,
        action.animalData.type,
        action.animalData.breed,
        action.animalData.image,
      );
      return {
        animals: state.animals.concat(newAnimal)
      }
    default:
      return state;
  }
};

export default animalsReducer;