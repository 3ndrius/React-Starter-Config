import React, { Component } from 'react';



class Go extends Component {

  constructor(props) {
    super();
    this.state = {
      todos:['wash up', "make some food", "go somewhere"]
    }
   }

  render() {
    return (
      <div>
            <h2> { this.state.todos[0]}   </h2> 
            <h2> { this.state.todos[1]}   </h2> 
            <h2> { this.state.todos[2]}   </h2> 
      
      </div>
    );
  }

  
}




export default Go;
