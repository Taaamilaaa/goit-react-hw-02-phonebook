import React from "react";
import "./App.css";
import { Form } from "../components/Form/Form";
import { ContactList } from "../components/ContactList/ContactList";
import { v4 as uuid } from "uuid";
import { Filter } from "../components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandle = (data) => {
    const { name, number } = data;
    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };
    const renderedNames = this.state.contacts.find(
      (contact) => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );
    if (renderedNames) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  filterChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };
  contactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  onBtnDelClick = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render = () => {
    const { filter, contacts } = this.state;
    const contactsFilter = this.contactsFilter();
    
    return (
      <div className="phonebook">
        <h2 className="title">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandle} />
        <h2 className="title">Contacts</h2>
         {contacts.length > 1 && (<Filter value={filter} onChange={this.filterChange} />)}
        {contacts.length > 0 
        ? (<ContactList contacts={contactsFilter} clickOnBtn={this.onBtnDelClick}/>)
        : (<p>Please add your contacts.</p>)}
      </div>
    );
  };
}

export default App;
