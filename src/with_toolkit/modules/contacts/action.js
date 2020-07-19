import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('addContact', contact => ({
  payload: {
    contact: {
      id: uuidv4(),
      name: contact.name,
      number: contact.number,
    },
  },
}));

export const deleteContact = createAction('deleteContact');
export const contactFilter = createAction('contactFilter');
