import { ContactItem } from "../ContactItem/ContactItem";

export function ContactList({ contacts }) {   
    return (
         <>
         
        <ul>
          <ContactItem contacts={contacts} />
        </ul>
        </>
      );
    
    }
   

