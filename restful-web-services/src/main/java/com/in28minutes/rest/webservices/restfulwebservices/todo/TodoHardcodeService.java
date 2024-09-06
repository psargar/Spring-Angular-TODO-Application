package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodeService {
    private static final List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "in28minutes", "Learn Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Microservices 2", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about angular", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn Dance", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 && todo.getId() == 0){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            delteTodo(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo delteTodo(long id) {
        Todo todo = findById(id);
        if (todo == null)
            return null;
        todos.remove(todo);
        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo : todos)
            if (todo.getId() == id)
                return todo;
        return null;
    }


}
