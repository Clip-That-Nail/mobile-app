import { createStore, combineReducers, applyMiddleware } from 'redux';
import sessionReducer from './reducers/session';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  session: sessionReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;