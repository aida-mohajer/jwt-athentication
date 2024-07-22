import { AutomapperProfile } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Profile } from '../../entities/profile.entity';
import { ReadUserDto } from './dto/ReadUser.dto';
import { EmailDto } from './dto/Email.dto';
import { ReadCodeDto } from './dto/ReadCode.dto';
import { UserProfile } from 'src/entities/userProfile.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ReadCodeDto, Profile);
      createMap(mapper, Profile, ReadCodeDto);
      createMap(mapper, EmailDto, Profile);

      createMap(mapper, ReadUserDto, UserProfile);
      createMap(mapper, UserProfile, ReadUserDto);
      createMap(mapper, CreateUserDto, UserProfile);
    };
  }
}
