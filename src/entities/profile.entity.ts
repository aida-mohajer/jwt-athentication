import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @AutoMap()
  @Column()
  email: string;

  @ApiProperty()
  @AutoMap()
  @Column()
  code: number;

  @ApiProperty()
  @AutoMap()
  @Column()
  createdDate: Date;
}
