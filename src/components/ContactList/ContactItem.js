import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactItem = ({ name, number, onClick }) => {
  return (
    <>
      {name}: {number}
      <button className={s.button} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
