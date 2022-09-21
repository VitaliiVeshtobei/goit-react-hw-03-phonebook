import React, { Component } from 'react';
import { Input, Button, Label } from './FormStyled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    console.log(evt.currentTarget.name);
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </form>
      </div>
    );
  }
}
