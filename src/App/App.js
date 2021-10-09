import React from "react";
import "./App.css";
import { Form } from "../components/Form/Form";
import { Contacts } from "../components/Contacts/Contacts";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  contactId = uuid();
  state = {
  contacts: [],
  };
  formSubmitHandler = (data) => {
    if (data) {
   const { name, number } = data;
      console.log(name);
      console.log(number);
      const contact = {
        id: this.contactId,
        name: name,
        number: number,
      }
      return this.addNewContact(contact)
    }
  };
  addNewContact = (data) => {
    
this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
}
  render = () => {

   return (
      <div className="phonebook">
        <h2>Phonebook</h2>
       <Form onSubmit={this.formSubmitHandler} />
        <Contacts contacts = {this.formSubmitHandler()}/>      
      
      </div>
    );
  };
}

export default App;
