import { Component } from '@angular/core';
import { Todo } from './class/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDos: Todo[] = [];
  newTodo!: string;

  saveToDo(){
    if(this.newTodo){
    let todo = new Todo();
    todo.name = this.newTodo;
    todo.isCompleted = false;
    this.toDos.push(todo);
    this.newTodo = '';
    }
    else {
      alert("Adicione uma tarefa");
    }
  }
  doneToDo(id:number){
    this.toDos[id].isCompleted = !this.toDos[id].isCompleted;
  }
  
  removeToDo(id:number){
    this.toDos = this.toDos.filter((v,i) => i !== id);
  }

}
