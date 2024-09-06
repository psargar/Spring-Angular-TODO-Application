import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date(), 'in28minutes');

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.retriveTodo('in28minutes', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTo() {
    if (this.id === -1) {
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoService.updateTodo(this.id, 'in28minutes', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }



}
