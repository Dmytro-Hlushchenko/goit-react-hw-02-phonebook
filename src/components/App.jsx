import React from "react";
import { nanoid } from 'nanoid'
import { Component } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";

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
    console.log(this.state.filter)
    const newItem = {name: this.state.name,
                    id: nanoid(),
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
   
render(){
  const visibleContacts = this.filterVisibleContacts();
   
  return (
    <>
      <FormInput
        onFormSubmit = {this.onFormSubmit}
        onContactInput = {this.onFormInput}
        >
      </FormInput>
      <ContactsList
        contacts = {visibleContacts}
        onInputFilterName = {this.onFormInput}>
      </ContactsList>
    </>
  );
};
};
