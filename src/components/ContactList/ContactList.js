import React from 'react';
// import PropTypes from 'prop-types';

const ContactList = ({ id, name, number }) => (
  <ul>
    <li key={id}>
      {name}: {number}
    </li>
  </ul>
);

export default ContactList;
