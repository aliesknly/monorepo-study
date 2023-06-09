import { Injectable } from '@nestjs/common';
import { CreateUserDto, ShowUserDto } from '../Domain/dto';
import { UpdateUserDto } from '../Domain/dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../Domain/schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<ShowUserDto> {
    const newUser = await this.user.create(createUserDto);
    newUser.save();
    return this.user.findOne({ email: createUserDto.email });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
