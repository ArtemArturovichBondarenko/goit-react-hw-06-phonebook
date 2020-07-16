import React from 'react';
import { connect } from 'react-redux';
import * as action from '../with_toolkit/modules/contacts/action';
// import * as action from '../without_toolkit/redux/contacts/action';
// import {
//   addContact,
//   deleteContact,
// } from '../with_toolkit/modules/contacts/action';
// import {
//   addContact,
//   deleteContact,
// } from '../without_toolkit/redux/contacts/action';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';

const App = ({ contacts, filter, addContact, deleteContact }) => {
  const handleAddContact = contact =>
    addContact({
      id: uuidv4(),
      ...contact,
    });

  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = filterContacts(contacts, filter);
  return (
    <div className={style.div}>
      <h1 className={style.h1}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      {contacts.length > 1 && <Filter />}
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  filter: state.contact.filter,
});

const mapDispatchToProps = {
  addContact: action.addContact,
  deleteContact: action.deleteContact,
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       addContact: action.addContact,
//       deleteContact: action.deleteContact,
//     },
//     dispatch,
//   );

export default connect(mapStateToProps, mapDispatchToProps)(App);
