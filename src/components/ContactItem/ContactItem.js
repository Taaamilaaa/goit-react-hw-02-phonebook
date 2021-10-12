import React from "react";
import styles from "./contactItem.module.css";

export function ContactItem({ contacts, clickOnBtn }) {
  return contacts.map((contact) => {
    const { id, name, number } = contact;
    return (
      <li className={styles.contactItem} key={id}>
        <span id = 'name' className={styles.name}>{name}:</span>{" "}
        <span className={styles.number}>{number}</span>{" "}
        <button className={styles.btn} onClick={clickOnBtn}>❌</button>
      </li>
    );
  });
}
