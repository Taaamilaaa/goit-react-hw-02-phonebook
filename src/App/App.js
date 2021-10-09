import React from "react";
import "./App.css";
import { Form } from "../components/Form/Form";
import { ContactList } from "../components/ContactList/ContactList";
import { v4 as uuid } from "uuid";
import {Filter} from '../components/Filter/Filter'

class App extends React.Component {
  nameId = uuid();
  nameInputId = uuid();
  numberInputId = uuid();
  contactId = uuid();

  state = {
    contacts: [],
  };
  formSubmitHandle = (data) => {
    const contact = {
      id: uuid(),
      name: data.name,
      number: data.number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  filter = () => {

  }
  render = () => {
    return (
      <div className="phonebook">
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandle} />
         <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
        <Filter onChange={ this.filter}/>

      </div>
    );
  };
}

export default App;
