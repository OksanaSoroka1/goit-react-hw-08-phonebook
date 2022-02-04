import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './items/reducer';
import userReduser from './auth/reducers';
import errorReducer from './error/reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  user: userReduser,
  error: errorReducer,
});

const store = configureStore({ reducer: rootReducer });
export { store };
