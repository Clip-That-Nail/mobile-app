import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './reducers/session';
import sessionsReducer from './reducers/sessions';
import dogsReducer from './reducers/dogs';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  session: sessionReducer,
  sessions: sessionsReducer,
  dogs: dogsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;