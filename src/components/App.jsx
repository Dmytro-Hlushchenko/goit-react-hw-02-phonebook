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
    const newItem = {name: this.state.name,
                    id: nanoid(),
                    number: this.state.number};
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem]
    }));
      
  }

  onContactInput = (key, value) => {
    this.setState({
    [key]:value
    })
  }
  
  onFilterName = newFilter => {
    this.setState({
      filter: newFilter,
    })
  }
 
render(){
  return (
    <>
      <FormInput
        onFormSubmit = {this.onFormSubmit}
        onContactInput = {this.onContactInput}
        >
      </FormInput>
      <ContactsList
        contacts = {this.state.contacts}
        onInputFilterName = {this.onFilterName}>
      </ContactsList>
    </>
  );
};
};
