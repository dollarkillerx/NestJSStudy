import {Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {Todo} from "./entities/todo.entity";

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}


    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todosService.create(createTodoDto);
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todosService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<boolean> {
        return this.todosService.remove(+id);
    }
}
