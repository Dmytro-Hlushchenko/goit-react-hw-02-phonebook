import React from "react";
import { Component } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import { nanoid } from 'nanoid';

export class App extends Component {
  
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
                    id: nanoid(),
                    name: this.state.name,
                    number: this.state.number};
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem]
    }));
      
  }

  onFormInput = (key, value) => {
    this.setState({
    [key]:value
    })
  }


   filterVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const lowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
   };

   deleteContact = () => {

   }
   
render(){
  const visibleContacts = this.filterVisibleContacts();
   
  return (
    <div>
      <h1>Phonebook</h1>
        <FormInput
          onFormSubmit = {this.onFormSubmit}
          onContactInput = {this.onFormInput}
          >
        </FormInput>
        <h2>Contacts</h2>
        <Filter
        onInputFilterName={this.onFormInput}>
        </Filter>
        <ContactsList
          onDelete = {this.deleteContact}
          contacts = {visibleContacts}
          onInputFilterName = {this.onFormInput}>
        </ContactsList>
    </div>
  );
};
};
