import { Module } from '@nestjs/common';
import { UserController } from './Controller/user.controller';
import { GetUser } from './UseCase/get_user.use_case';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [GetUser],
})
export class UserModule {}
