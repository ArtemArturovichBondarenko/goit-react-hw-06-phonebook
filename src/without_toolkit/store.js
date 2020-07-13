import { createStore, combineReducers } from 'redux';
import contactReducer from './redux/contacts/reducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
