import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { User } from '../user.domain';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class UserObject extends Document {
  @Prop()
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop()
  lastName: string;

  @Prop()
  birthDate: string;
}

export const UserSchema = SchemaFactory.createForClass(UserObject);
