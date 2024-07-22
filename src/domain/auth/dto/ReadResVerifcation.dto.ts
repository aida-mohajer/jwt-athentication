import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class ReadResVerificationDto {
  @AutoMap()
  // @ApiProperty()
  success: boolean;

  @AutoMap()
  // @ApiProperty()
  jwtToken: string;
}
