import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const addContact = (state, { payload: contact }) => {
  const searchExistingContact = (state, payload) => {
    state.contacts.some(contact => contact.name === payload.contact.name);
  };
  // const searchExistingContact = (state, action) => {
  //   state.contacts.some(contact => contact.name === action.payload.contact.name);
  // };
  if (searchExistingContact === true) {
    alert(`is already exist`);
    return { ...state };
  }
  return {
    ...state,
    contacts: [...state.contacts, contact.contact],
  };
};
// payload: {
//   contact: {
//     id: uuidv4(),
//     name: item.name,
//     number: item.number,
//   },

const deleteContact = (state, { payload: id }) => {
  return {
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== id),
  };
};

const contactFilter = (state, { payload: filter }) => {
  return {
    ...state,
    filter: filter,
  };
};

const contactReducer = createReducer(initialState, {
  [actions.addContact.type]: addContact,
  [actions.deleteContact.type]: deleteContact,
  [actions.contactFilter.type]: contactFilter,
});

export default contactReducer;
