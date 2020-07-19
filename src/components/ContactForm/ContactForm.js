import React, { useState } from 'react';
import { connect } from 'react-redux';
// import * as action from '../../without_toolkit/redux/contacts/action';
import * as action from '../../with_toolkit/modules/contacts/action';
import styles from './ContactForm.module.css';

const ContactForm = ({addContact}) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.p}>Name</p>
        <input
          className={styles.input}
          type="text"
          required
          name="name"
          value={contact.name}
          onChange={handleChange}
        ></input>
        <p className={styles.p}>Number</p>
        <input
          className={styles.input}
          required
          placeholder="Enter the number"
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
        ></input>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};


const mapDispatchToProps = {
   addContact: action.addContact
};

export default connect(null, mapDispatchToProps)(ContactForm);
