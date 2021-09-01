import dogsTypes from '../types/dogs';
import Dog from '../../models/dog';

const initialState = {
  dogs: []
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case dogsTypes.SET_DOGS:
      return {
        dogs: action.dogs.map(dog => new Dog(dog.id.toString(), dog.name, dog.breed, dog.imageUri))
      }
    case dogsTypes.ADD_DOG:
      const newDog = new Dog(
        action.dogData.id.toString(),
        action.dogData.name,
        action.dogData.breed,
        action.dogData.image,
      );
      return {
        dogs: state.dogs.concat(newDog)
      }
    default:
      return state;
  }
};

export default sessionReducer;