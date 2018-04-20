import React, { Component } from 'react';

class Go extends Component {
  render() {
    return (
      <div>
       
        
        <h3> Name: <strong> {this.props.person.name }</strong></h3> 
        <h3> Age:<strong> {this.props.person.age } </strong> </h3> 

      </div>
    );
  }
}

var myObject = { name: "John", age: "22", height:"180"};


export default Go;
