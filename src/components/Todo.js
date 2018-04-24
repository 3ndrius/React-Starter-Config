import React, { Component } from 'react';


class Todo extends Component {

    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
      }

    render() {

        return(
            <li> 
                <div className="todo-item">
                    <span className="item-name"> {this.props.item} </span>
                    <span className="item-delete" onClick={this.handleDelete}> X </span> 
                </div>
            </li>
        );
    }
 
    //own function


     
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val,index) {
          return item !==val;
        });
        this.setState({
          todos:updatedTodos
        });
      }

    
}

export default Todo;