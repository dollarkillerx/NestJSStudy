import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'root',     // 改成你的用户名
        password: 'root', // 改成你的密码
        database: 'todo_db',      // 数据库名
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TodosModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
