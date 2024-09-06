import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { HttpIntercepterBasicAuthService } from '../http/http-intercepter-basic-auth.service';
import { API_URL, JPA_API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
  private http : HttpClient,
  private httpHeaderHandling: HttpIntercepterBasicAuthService
  ) { }

  retriveAllTodos(username : any){
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  delteTodoService(id:number, username:string){
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(id:number, username:string, todo:Todo){
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username:string, todo:Todo){
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }

  retriveTodo(username:string,id:number){
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }


}
