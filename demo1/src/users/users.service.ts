import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async create(username: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({ username, password: hashedPassword });
        return this.usersRepository.save(user);
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.usersRepository.findOneBy({ username });
    }

    async findById(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }
}
