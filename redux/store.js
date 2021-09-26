import { createStore, combineReducers, applyMiddleware } from 'redux';
import newSessionReducer from './reducers/newSession';
import sessionsReducer from './reducers/sessions';
import petsReducer from './reducers/pets';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  newSession: newSessionReducer,
  sessions: sessionsReducer,
  pets: petsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;