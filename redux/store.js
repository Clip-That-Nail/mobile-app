import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './reducers/session';
import sessionsReducer from './reducers/sessions';
import petsReducer from './reducers/pets';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  session: sessionReducer,
  sessions: sessionsReducer,
  pets: petsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;