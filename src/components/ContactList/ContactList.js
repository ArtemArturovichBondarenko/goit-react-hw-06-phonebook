import React from 'react';
import { connect } from 'react-redux';
// import * as action from '../../without_toolkit/redux/contacts/action';
import * as action from '../../with_toolkit/modules/contacts/action';

import Contact from '../Contact/Contact';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import slideTransition from '../../transitions/slide_250ms.module.css';
import style from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  // <TransitionGroup component="ul" className={style.ul}>
  <ul className={style.ul}>
    {contacts.map(contact => (
      // <CSSTransition
      //   key={contact.id}
      //   timeout={250}
      //   unmountOnExit
      //   classNames={slideTransition}
      // >
      <li key={contact.id} className={style.li}>
        <Contact
          {...contact}
          onDeleteContact={() => deleteContact(contact.id)}
        />
      </li>
      // </CSSTransition>
    ))}
  </ul>
  /* </TransitionGroup> */
);

const mapStateToProps = state => {
  const { contacts, filter } = state.contact;

  const normalizedFilter = filter.toLowerCase();

  const visibleTasks = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleTasks,
  };
};

const mapDispatchToProps = {
  deleteContact: action.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
