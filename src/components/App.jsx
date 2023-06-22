import React from "react";
import { nanoid } from 'nanoid'
import { Component } from "react";
import FormInput from "./FormInput";
import ContactsList from "./ContactsList";

//Кожен контакт повинен бути об'єктом з властивостями name та id.
//Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад nanoid. 
//Після завершення цього кроку, застосунок повинен виглядати приблизно так.

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
        onNameInput = {this.onNameInput}>
        </FormInput>
      </form>
      <ContactsList>

      </ContactsList>
    
     </>
  );
};
};
