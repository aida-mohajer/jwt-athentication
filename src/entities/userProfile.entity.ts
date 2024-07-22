import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserProfile {
  @ApiProperty()
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @AutoMap()
  @Column()
  firstName: string;

  @ApiProperty()
  @AutoMap()
  @Column()
  lastName: string;

  @ApiProperty()
  @AutoMap()
  @Column()
  email: string;

  @ApiProperty()
  @AutoMap()
  @Column()
  country: string;

  @ApiProperty()
  @AutoMap()
  @Column()
  age: number;

  @ApiProperty()
  @AutoMap()
  @Column()
  createdDate: Date;
}
