import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './reducers/session';
import sessionsReducer from './reducers/sessions';
import animalsReducer from './reducers/animals';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  session: sessionReducer,
  sessions: sessionsReducer,
  animals: animalsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;