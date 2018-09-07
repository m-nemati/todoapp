import React, { Component } from "react";
import {observer} from 'mobx-react'
import TodoStore from "../stores/TodoStore";
import TodoFooter from "./TodoFooter";
import TodoEntry from "./TodoEntry";

@observer
class TodoItem extends Component {

  onToggle=()=>{
    this.props.todo.toggle()
  }

  deleteItem=()=>{
    TodoStore.removeTodo(this.props.todo)
    

  }
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button onClick={this.deleteItem}  className="destry mndestry" >Delete</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
