import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import Notification from './Notification/Notification';
import * as action from '../without_toolkit/redux/contacts/action';
import style from './App.module.css';

const App = ({
  contacts,
  filter,
  addContact,
  deleteContact,
  contactFilter,
}) => {
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
    <>
    console.log(contactFilter)
      {/* <Notification onClick={this.changenotification} /> */}
      <h1 className={style.h1}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      {contacts.length > 1 && <Filter filter={contactFilter} />}
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  filter: state.contact.filter,
});

const mapDispatchToProps = {
  addContact: action.addContact,
  deleteContact: action.deleteContact,
  contactFilter: action.contactFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
