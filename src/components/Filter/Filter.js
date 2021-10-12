import React from "react";
import styles from './filter.module.css';
import PropTypes from "prop-types"; // ES6

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
Filter.propType = {
onChange: PropTypes.func,
}