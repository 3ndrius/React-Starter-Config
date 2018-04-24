import React, { Component } from 'react';


class Todo extends Component {

    render() {

        return(
            <li> 
                <div className="todo-item">
                    <span className="item-name"> {this.props.item} </span>
                </div>
            </li>
        );
    }
 
}

export default Todo;