import React from 'react';
import { connect } from 'react-redux';
import { contactFilter } from '../../with_toolkit/modules/contacts/action';
// import { contactFilter } from '../../without_toolkit/redux/contacts/action';

import style from '../ContactForm/ContactForm.module.css';
const Filter = ({ filter, contactFilter }) => {
  return (
    <div className={style.form}>
      <p className={style.p}>Find contacts by name</p>
      <input
        type="text"
        className={style.input}
        value={filter}
        onChange={e => contactFilter(e.target.value)}
      ></input>
    </div>
  );
};
const mapStateToProps = ({ contact: { filter } }) => ({ filter });
const mapDispatchToProps = { contactFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
