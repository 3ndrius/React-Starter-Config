import React, { Component } from 'react';


class Todo extends Component {

    render() {

        return(
            <li> 
                <div className="todo-item">
                    <span className="item-name"> {this.props.item} </span>
                    <span className="item-delete" onClick={this.handleDelete}> </span> 
                </div>
            </li>
        );
    }
 
}

export default Todo;