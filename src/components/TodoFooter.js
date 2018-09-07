import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";
import './TodoFooter.css'

@observer
class TodoFooter extends Component {

  delItems=()=>{
    TodoStore.removeAllTodo()
    
  }

  render() {
    return (
     <div className="works">
       <label  >
        Works:
        {TodoStore.tedad}
      </label>
      <button onClick={this.delItems} className="btndel" >Delete All </button>
     </div>

    );
  }
}

export default TodoFooter;
