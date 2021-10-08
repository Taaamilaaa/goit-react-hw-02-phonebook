import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  render = () => {
    return (
      <div className="phonebook">
        <h2>Phonebook</h2>
        <form>
          <label>Name</label>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>contact</li>
          <li>contact</li>
          <li>contact</li>
        </ul>
      </div>
    );
  };
}

export default App;
