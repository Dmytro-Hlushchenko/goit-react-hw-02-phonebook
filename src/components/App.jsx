import React from "react";
import { nanoid } from 'nanoid'
import { Component } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";

export class App extends Component {
  
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
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

  onNameInput = newName => {  
    this.setState({
        name: newName
    })
  }

  onNumberInput = newNamber => {  
    this.setState({
        number: newNamber
    })
  }
 
render(){
  return (
    <>
      <FormInput
        onFormSubmit = {this.onFormSubmit}
        onNameInput = {this.onNameInput}
        onNumberInput = {this.onNumberInput}
      >
      </FormInput>
      <ContactsList
        contacts = {this.state.contacts}>
      </ContactsList>
    </>
  );
};
};
