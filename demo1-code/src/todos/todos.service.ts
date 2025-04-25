import { Injectable } from '@nestjs/common';
import {CreateTodoDto}  from "./dto/create-todo.dto";
import {Todo} from "./entities/todo.entity";

@Injectable()
export class TodosService {
    private todos: Todo[] = [];

    create(crateTodoDto: CreateTodoDto): Todo {
        const todo: Todo = {
            completed: false,
            description: crateTodoDto.description,
            title: crateTodoDto.title,
            id: this.todos.length + 1
        };
        this.todos.push(todo);
        return todo;
    }

    findAll(): Todo[] {
        return this.todos;
    }

    remove(id: number): boolean {
       const idx = this.todos.findIndex(todo => todo.id == id);
       if (idx > -1) {
            this.todos.splice(idx,1)
           return true
       }
       return false
    }
}
