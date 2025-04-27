import {Controller, Get, Post, Body, Param, Delete, UseGuards} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {Todo} from "./entities/todo.entity";
import {AuthGuard} from "@nestjs/passport";

@Controller('todos')
@UseGuards(AuthGuard('jwt'))
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
