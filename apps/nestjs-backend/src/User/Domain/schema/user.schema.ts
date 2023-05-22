import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../user.domain';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class UserObject {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  lastName: string;

  @Prop()
  birthDate: string;
}

export const UserSchema = SchemaFactory.createForClass(UserObject);
