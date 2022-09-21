import React from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    const names = this.state.contacts.map(contact => contact.name);

    if (names.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  deleteContact = id => {
    const index = this.state.contacts.findIndex(contact => contact.id === id);

    this.setState(this.state.contacts.splice(index, 1));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
