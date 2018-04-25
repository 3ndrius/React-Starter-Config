import React, { Component } from 'react';


class Todo extends Component {

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
      };
      delete()
      {
             this.props.handleDelete(this.props.name);
      }

    render() {

        return(
            <li> 
                <div className="todo-item">
                    <span className="item-name"> {this.props.item} </span>
                    <span className="item-delete"> X </span> 
                </div>
            </li>
        );
    }
 
    //own function     
     
}

export default Todo;