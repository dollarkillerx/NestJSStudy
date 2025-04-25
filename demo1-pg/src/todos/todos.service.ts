import { Injectable } from '@nestjs/common';
import {CreateTodoDto}  from "./dto/create-todo.dto";
import {Todo} from "./entities/todo.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepo: Repository<Todo>,
    ) {}


    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = this.todoRepo.create(createTodoDto);
        return this.todoRepo.save(todo);
    }

    async findAll(): Promise<Todo[]> {
        return this.todoRepo.find();
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.todoRepo.delete(id);
        // @ts-ignore
        return result.affected > 0;
    }
}
