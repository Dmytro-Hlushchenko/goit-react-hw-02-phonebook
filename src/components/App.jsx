import React from "react";
import { nanoid } from 'nanoid'
import { Component } from "react";
import FormInput from "./FormInput";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  onFormSubmit(){

  }

  onNameInput = ({target}) => {
    this.setState({
        name: target.value
    })
  }
 
render(){
  return (
    <>
    <form>
      <FormInput
      onFormSubmit = {this.onFormSubmit}
      onNameInput = {this.onNameInput}
      >
      </FormInput>
    </form>
      
     <label>
          Contacts
     </label>
     </>
  );
};
};
