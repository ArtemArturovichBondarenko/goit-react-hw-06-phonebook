import types from './type';

export const addContact = item => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      item,
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

export const contactFilter = value => {
  return {
    type: types.CONTACT_FILTER,
    payload: {
      value,
    },
  };
};
