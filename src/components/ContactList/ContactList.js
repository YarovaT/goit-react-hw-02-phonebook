import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ol>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.listItem}>
        {name}: {number}
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
