import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        return ( 
          <>
            <label>{this.props.label}</label>
            <select onChange={this.props.changeEvent} defaultValue='asc'>
                {this.props.option.map((choice) => (
                    <option value={choice}>{choice}</option>
                ))}
            </select>  
          </>  
         );
    }
}
 
export default Dropdown;