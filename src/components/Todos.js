import React, { Component } from 'react';
// import Todo from './Todo';

class Todos extends Component {

  constructor() {
    super();
    this.state = {
      todos: ['walk', 'run', 'sprint'],
      currentTodo: ""
    };
  }


  render() {
    return (
      <div> 

        <input placeholder="Enter todo" value={ this.state.currentTodo } />
        <button> Add </button>
        <br/>
        {this.state.todos.length === 0 ? "Not todos yet" : "You have some todos "}

      </div>
    );
  }

};
export default Todos;

  
    



