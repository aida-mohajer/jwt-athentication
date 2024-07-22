import { AutoMap } from '@automapper/classes';

export class ReadUserDto {
  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  email: string;

  @AutoMap()
  country: string;

  @AutoMap()
  age: number;
}
