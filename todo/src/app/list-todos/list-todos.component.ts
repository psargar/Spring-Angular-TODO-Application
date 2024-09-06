import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
    public username: string
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;
  message = '';
  // new Todo(1, 'Learn to Dance',false, new Date()),
  // new Todo(2, 'Go to shower',false, new Date()),
  // new Todo(3, 'Visit india',false, new Date())

  // {id : 1, description : 'Learn to Dance'},
  // {id : 2, description : 'Expert at Angular'},
  // {id : 3, description : 'Visit India'},


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.fetchAllTodo();
  }

  fetchAllTodo() {
    this.todoService.retriveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response)
        this.todos = response
      });
  }


  deleteTodo(id: any) {
    this.todoService.delteTodoService(id, "in28minutes").subscribe(
      response => {
        console.log(response);
        this.message = 'Todo is deleted Successfully'
        this.fetchAllTodo();
      })
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }


}
