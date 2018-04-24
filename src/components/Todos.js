import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos:['drive a car', "ride a bike", "running", "reading"],
    };
    
   }
    render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <Todo item={item} key={index} />
          
      );
    });
    return (
      <div>
            
           
            <ul> {todos} </ul>

          
      
      </div>
    );
  }  
};
export default Todos;

  
    



