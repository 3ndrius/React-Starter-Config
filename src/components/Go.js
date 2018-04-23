import React, { Component } from 'react';



class Go extends Component {

  constructor(props) {
    super();
    this.state = {
      todos:['wash up', "make some food", "go somewhere"],
      age: 30,
      status: 0
    };
    setTimeout(() => {
      this.setState({
        status:1
      });
    }, 3000);

   }

   tick() {
    this.setState({
      age: this.state.age +3
    });
  }

 

  render() {
    return (
      <div>
        <h2> {this.state.age} </h2>
        <h4> {this.state.status} </h4>
        
            <h2> { this.state.todos[0]} </h2> 
            <h2> { this.state.todos[1]} </h2> 
            <h2> { this.state.todos[2]} </h2> 

            <button onClick={() => this.tick() } > Make me older </button> 
      
      </div>
    );
  }

  
}




export default Go;
