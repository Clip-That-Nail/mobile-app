import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './reducers/session';
import dogsReducer from './reducers/dogs';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  session: sessionReducer,
  dogs: dogsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;