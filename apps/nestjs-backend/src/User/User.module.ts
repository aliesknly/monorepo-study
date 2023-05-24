import { Module } from '@nestjs/common';
import { UserController } from './Controller/user.controller';
import { UserService } from './UseCase/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserObject, UserSchema } from './Domain/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserObject.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
