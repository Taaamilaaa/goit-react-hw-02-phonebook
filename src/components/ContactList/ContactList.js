import { ContactItem } from "../ContactItem/ContactItem";
import styles from './contactList.module.css'

export function ContactList({ contacts, clickOnBtn }) {   
    return (
         <>
         
        <ul className={styles.list}>
          <ContactItem contacts={contacts}
            clickOnBtn = { clickOnBtn}/>
        </ul>
        </>
      );
    
    }
   

