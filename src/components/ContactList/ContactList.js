import React from 'react';
import Contact from '../Contact/Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slideTransition from '../../transitions/slide_250ms.module.css';
import style from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <TransitionGroup component="ul" className={style.ul}>
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={250}
        unmountOnExit
        classNames={slideTransition}
      >
        <li key={contact.id} className={style.li}>
          <Contact {...contact} onDeleteContact={() => deleteContact(contact.id)} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;
