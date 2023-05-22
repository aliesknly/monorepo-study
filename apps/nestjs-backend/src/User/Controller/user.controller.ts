import { Controller, Get } from '@nestjs/common';
import { GetUser } from '../UseCase/get_user.use_case';

@Controller('user')
export class UserController {
  constructor(private readonly userService: GetUser) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }
}
