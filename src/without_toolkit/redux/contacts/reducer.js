// import {combineReducers} from 'redux'
import types from './type';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const searchExistingContact = state.contacts.some(
        contact => contact.name === payload.item.name,
      );

      if (searchExistingContact === true) {
        alert(`is already exist`);
        return { ...state };
      }
      return {
        ...state,
        contacts: [...state.contacts, payload.item],
      };

    case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.id),
      };

    case types.CONTACT_FILTER:
      return { 
        ...state,
        filter: payload.filter };

    default:
      return state;
  }
};

export default contactReducer;
