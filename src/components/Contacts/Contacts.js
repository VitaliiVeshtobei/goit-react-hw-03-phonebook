import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContact, ListContatcts, ItemContact } from './ContactsStyled';

export function Contacts({ contacts, onDeleteContact }) {
  return (
    <ListContatcts>
      {contacts.map(contact => {
        return (
          <ItemContact key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonContact
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </ButtonContact>
          </ItemContact>
        );
      })}
    </ListContatcts>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
