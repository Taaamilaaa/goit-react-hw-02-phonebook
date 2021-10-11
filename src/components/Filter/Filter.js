import React from "react";
import styles from './filter.module.css'
export class Filter extends React.Component {
  state = {   
    filter: "", 
  };
  handleSearch = (e) => {    
    const filteredValue = e.currentTarget.value.toUpperCase();
    
    this.setState({ filter: { filteredValue } });
    this.props.onChange(this.state.filter);
  };
 
  render() {
    return (
      <>
        <label className = {styles.label}>Find contacts by name</label>
        <input className={styles.input} onChange={this.handleSearch} />      
      </>
    );
  }
}
