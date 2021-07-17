import React from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ name, id }) => (
  <form>
    <label for="name">Name</label>

    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />

    <label for="tel">Number</label>

    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
    />

    <button type="submit" className={s.button}>
      Add contact
    </button>
  </form>
);

export default ContactForm;
