import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ 必须加上！
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // ✅ 如果别的地方（比如 auth）要用，也要 export
})
export class UsersModule {}
