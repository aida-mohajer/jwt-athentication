import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
