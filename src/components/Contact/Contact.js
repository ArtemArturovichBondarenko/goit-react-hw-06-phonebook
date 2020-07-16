import React from 'react';
import style from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <span className={style.span_name}>{name}</span>
    <span className={style.span_number}>{number}</span>
    <button type="button" className={style.button} onClick={onDeleteContact}>
      &#9587;
    </button>
  </>
);


export default Contact;
