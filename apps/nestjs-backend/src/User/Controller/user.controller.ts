import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../UseCase/user.service';
import { CreateUserDTO, ShowCreateUserDTO } from '../Domain/dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserObject } from '../Domain';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  @ApiOperation({ summary: 'Crear Usuario' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UserObject,
  })
  async createUser(@Body() params: CreateUserDTO): Promise<ShowCreateUserDTO> {
    return await this.userService.createUser(params);
  }
}
