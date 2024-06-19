import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsEmail,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @Matches(/^[a-zA-Z\s]*$/, {
    message: 'Name must contain only letters and spaces',
  })
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
