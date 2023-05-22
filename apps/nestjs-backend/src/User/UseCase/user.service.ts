import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserObject } from '../Domain/schema/user.schema';
import { CreateUserDTO, ShowCreateUserDTO } from '../Domain/dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserObject.name) private userModel: Model<UserObject>,
  ) {}

  async createUser(createUserDto: CreateUserDTO): Promise<ShowCreateUserDTO> {
    const newUser = await this.userModel.create(createUserDto);
    return newUser.save();
  }

  getUser(): string {
    return `User:`;
  }
}
