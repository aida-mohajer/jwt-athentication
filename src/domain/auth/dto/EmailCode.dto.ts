import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsEmail, IsNotEmpty } from 'class-validator';

export class emailCodeDto {
  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  code: number;
}
