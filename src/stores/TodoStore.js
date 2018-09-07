import { observable, action } from "mobx";
import TodoModel from './TodoModel'

class TodoStore {

    @observable todos = []
    lastID=0
    @observable tedad=0

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this,title, false, this.lastID++))
        this.getWorks()
    }

    @action
    removeTodo(element){
            const index = this.todos.indexOf(element);
            this.todos.splice(index, 1);
            this.getWorks()
        
    }

    @action
    removeAllTodo(){
        this.todos=[]
        this.getWorks()
    }

    @action
    getWorks(){
       this.tedad= this.todos.length
    }
}

const store = new TodoStore()

export default store