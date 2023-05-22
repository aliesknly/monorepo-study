import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserObject } from '../Domain/schema';
import { CreateUserDTO, ShowCreateUserDTO } from '../Domain/dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserObject.name) private userModel: Model<UserObject>,
  ) {}

  async createUser(createUserDto: CreateUserDTO): Promise<ShowCreateUserDTO> {
    const newUser = await this.userModel.create(createUserDto);
    const savedUser = await newUser.save();
    const user = savedUser.toObject();
    delete user.password;
    return user;
  }

  getUser(): string {
    return `User:`;
  }
}
