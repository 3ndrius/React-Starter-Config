import React, { Component } from 'react';



class Go extends Component {

  constructor(props) {
    super();
    this.state = {
      todos:['wash up', "make some food", "go somewhere", "go to work"],
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

    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(

        <ToDoItem item={item} key = {index} />

        // <li> {item}</li>
      );
    });
    return (
      <div>
        <h2> {this.state.age} </h2>
        <h4> {this.state.status} </h4>
        
            {/* <h2> { this.state.todos[0]} </h2> 
            <h2> { this.state.todos[1]} </h2> 
            <h2> { this.state.todos[2]} </h2>  */}
            <ul> {todos} </ul>

            <button onClick={() => this.tick() } > Make me older </button> 
      
      </div>
    );
  }

  
};

// class TodoItem extends React.Component{

//   render(){
//       return(
//           <li>
//               <div className="todo-item">
//                   <span className="item-name">{this.props.item}</span>
//               </div>
//           </li>
//       );
//   }
// };




export default Go;
