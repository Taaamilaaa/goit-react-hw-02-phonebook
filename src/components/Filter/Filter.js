import React from "react";

export class Filter extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleSearch = (e) => {
    console.log(e.target.value);

    const results = this.state.contacts.filter(
      (contact) => contact.name.toUpperCase().includes(e.target.value.toUpperCase())  
    );
    this.setState({})
    
  };
 
  render() {
    return (
      <div>
        <label>Find contacts by name</label>
        <input onChange={this.handleSearch} />
        
        {/* <ul>
          {(this.handleSearch.map(contact => {
            // const { name, number } = contact;
            return (
              <li><span>{contact.name}:</span><span>{ contact.number}</span></li>
            )
          })}
          
        </ul> */}
      </div>
    );
  }
}
