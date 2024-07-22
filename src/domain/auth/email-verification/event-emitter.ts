import { Injectable } from '@nestjs/common';
import { Profile } from 'src/entities/profile.entity';

@Injectable()
export class EventService {
  async handlePreSaveOperation(user: Profile): Promise<Profile> {
    const date = new Date();
    user.createdDate = date;

    const min = 1000;
    const max = 9999;

    const code = Math.floor(Math.random() * (max - min + 1)) + min;
    user.code = code;

    return user;
  }
}
