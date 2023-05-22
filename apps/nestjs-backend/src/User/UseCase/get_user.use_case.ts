import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUser {
  getUser(): string {
    return `User:`;
  }
}
