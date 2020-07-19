import types from './type';
import { v4 as uuidv4 } from 'uuid';



 export const addContact = item => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact: {
        id: uuidv4(),
        name: item.name,
        number: item.number,
      },
    },
  };
};

export const deleteContact = id => {
  return {
    type: types.DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

export const contactFilter = filter => {
  return {
    type: types.CONTACT_FILTER,
    payload: {
      filter,
    },
  };
};
