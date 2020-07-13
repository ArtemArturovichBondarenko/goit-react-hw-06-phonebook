import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
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
    onSubmit(contact);
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

export default ContactForm;
