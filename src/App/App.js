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
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    
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
  contactsFilter = (data) => {
     const filteredContacts = this.state.contacts.filter(
      (contact) => contact.name.toUpperCase().includes(data));
    this.setState({ contacts: [...filteredContacts] })
  }
  
  onBtnDelClick = (e) => {
    e.target.parentNode.remove()
  }

  render = () => {
    return (
      <div className="phonebook">
        <h2 className = 'title'>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandle} />
        <h2 className = 'title'>Contacts</h2>
        <Filter onChange={this.contactsFilter}/>
        
        <ContactList contacts={this.state.contacts}
          clickOnBtn={ this.onBtnDelClick}/>
        

      </div>
    );
  };
}

export default App;
