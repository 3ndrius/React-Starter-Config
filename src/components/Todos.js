import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos:['drive a car', "ride a bike", "running", "reading"],
    };
    this.onDelete = this.onDelete.bind(this);
   }
    render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <Todo item={item} key={index} onDelete={this.onDelete }/>
          
      );
    });
    return (
      <div>

           <h2 onClick={this.clicked} > Title to click </h2>           
            <ul> {todos} </ul>

          
      
      </div>
    );
  }// render  

  onDelete(item) {
    var updatedTodos = this.state.todos.filter(function(val,index) {
      return item !==val;
    });
    this.setState({
      todos:updatedTodos
    });
  }


  //own function 
  clicked() {
    console.log("Clicked ! ");
  }//end function
};
export default Todos;

  
    



