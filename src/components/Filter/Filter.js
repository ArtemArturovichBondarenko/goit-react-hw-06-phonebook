import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from '../ContactForm/ContactForm.module.css';
const Filter = ({filter }) => {
  const [value, setValue] = useState('');

    filter = value
    
  console.log(filter)
  return (
    <div className={style.form}>
      <p className={style.p}>Find contacts by name</p>
      <input
        type="text"
        className={style.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
