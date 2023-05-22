import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../UseCase/user.service';
import { CreateUserDTO, ShowCreateUserDTO } from '../Domain/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  async createUser(@Body() params: CreateUserDTO): Promise<ShowCreateUserDTO> {
    return await this.userService.createUser(params);
  }
}
