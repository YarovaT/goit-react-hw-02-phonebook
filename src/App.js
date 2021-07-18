import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import initialContacts from './data/contacts.json';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  // id = { id: uuidv4() };

  formSubmitHandler = contactId => {
    console.log(contactId);

    // const addContact = this.state.contacts;

    this.setState(prevState => ({
      contacts: prevState.contacts.map(contact => {
        if (contact.id === contactId) {
          alert(`${contactId} is already in contacts`);
          return { ...contact, id: uuidv4() };
        }
        return contact;
      }),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
