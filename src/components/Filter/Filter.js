import React from "react";
import styles from './filter.module.css'
export class Filter extends React.Component {
  state = {   
    filter: "",  
  };
  handleSearch = (e) => {
    const filterValue = e.target.value.toUpperCase();  
    this.props.onChange(filterValue);
  };
 
  render() {
    return (
      <>
        <label className = {styles.label}>Find contacts by name</label>
        <input className={styles.input} value={this.state.filter} onChange={this.handleSearch} />
      </>
    );
  }
}
