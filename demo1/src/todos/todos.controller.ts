import {Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {Todo} from "./entities/todo.entity";

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Todo {
        return this.todosService.create(createTodoDto);
    }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Delete(":id")
    remove(@Param('id') id: String): boolean {
        return this.todosService.remove(+id);
    }
}
