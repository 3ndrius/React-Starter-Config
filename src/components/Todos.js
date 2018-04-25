import React, { Component } from 'react';
// import Todo from './Todo';

class Todos extends Component {

  constructor(props) {
    super();
    this.state = {
      todos: [],
      currentTodo: "",
      count: 0
    };
  }

increment() {
  this.setState({
    count: this.state.count + 1
  });
}



  render() {
    return (
      <div> 

         <button onClick={() =>this.increment()}> Conut </button>
       
       {this.state.count}

        {/* <input placeholder="Enter todo" value={ this.state.currentTodo } onChange={this.onInputChange} />
        <button> Add </button>
        <br/>
        {this.state.todos.length === 0 ? "Not todos yet" : "You have some todos "} */}

      </div>
    );
  }

};
export default Todos;

  
    



