import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ol>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.listItem}>
        <ContactItem
          name={name}
          number={number}
          onClick={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
