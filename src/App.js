import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import initialContacts from './data/contacts.json';
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  contactId = uuidv4();

  formSubmitHandler = newContact => {
    const similarName = this.state.contacts
      .map(contact => contact.name)
      .includes(newContact.name);

    if (similarName) {
      alert(`${newContact.name}is already in phonebook`);
    } else {
      const addContact = {
        ...newContact,
        id: this.contactId,
      };

      this.setState(({ contacts }) => ({
        contacts: [...contacts, addContact],
      }));
    }
  };

  // addContact = (task) => {
  //   const searchSameName = this.state.contacts
  //     .map((cont) => cont.name)
  //     .includes(task.name);

  //   if (searchSameName) {
  //     alert(`${task.name} is already in contacts`);
  //   } else if (task.name.length === 0) {
  //     alert("Fields must be filled!");
  //   } else {
  //     const contact = {
  //       ...task,
  //       id: uuidv4(),
  //     };

  //     this.setState((prevState) => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  seachContactByName = contactName => {
    this.setState({ filter: contactName.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <Filter value={filter} onChange={this.seachContactByName} />

        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
