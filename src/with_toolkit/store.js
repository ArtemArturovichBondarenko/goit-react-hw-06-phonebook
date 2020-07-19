import { configureStore } from '@reduxjs/toolkit';
import contact from './modules/contacts/reducer';

const store = configureStore({
  reducer: {
    contact,
  },
});

export default store;

