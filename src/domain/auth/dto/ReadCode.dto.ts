import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class ReadCodeDto {
  @AutoMap()
  // @ApiProperty()
  code: Number;
}
