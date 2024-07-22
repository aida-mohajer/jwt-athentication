import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailDto {
  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
