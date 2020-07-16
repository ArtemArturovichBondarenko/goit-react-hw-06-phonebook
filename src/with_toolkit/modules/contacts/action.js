import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('addContact');
export const deleteContact = createAction('deleteContact');
export const contactFilter = createAction('contactFilter');
