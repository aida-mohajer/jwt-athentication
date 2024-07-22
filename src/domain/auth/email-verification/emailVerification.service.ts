import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { EmailVerificationRepository } from './emailVerification.repository';
import { EmailDto } from '../dto/Email.dto';
import { ReadCodeDto } from '../dto/ReadCode.dto';
import { EventService } from './event-emitter';
import { emailCodeDto } from '../dto/emailCode.dto';
import { ReadResVerificationDto } from '../dto/readResVerifcation.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserProfile } from 'src/entities/userProfile.entity';
import { ReadUserDto } from '../dto/ReadUser.dto';

@Injectable()
export class EmailVerificationService extends TypeOrmCrudService<Profile> {
  constructor(
    private readonly repository: EmailVerificationRepository,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly eventService: EventService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {
    super(repository);
  }

  async sendCode(data: EmailDto): Promise<ReadCodeDto> {
    const existUser = await this.repository.findOne({
      where: { email: data.email },
    });
    if (existUser) {
      return this.mapper.map(existUser, Profile, ReadCodeDto);
    } else {
      const user = this.mapper.map(data, EmailDto, Profile);
      const userData = await this.eventService.handlePreSaveOperation(user);
      const result = await this.repository.save(userData);
      return this.mapper.map(result, Profile, ReadCodeDto);
    }
  }

  async verifyCode({
    email,
    code,
  }: emailCodeDto): Promise<ReadResVerificationDto> {
    const user = await this.repository.findOne({ where: { email, code } });

    const dto = new ReadResVerificationDto();
    if (user) {
      dto.success = true;
      const accessToken = await this.authService.createJwt(email, user.id);
      dto.jwtToken = accessToken;
      // console.log(accessToken);
      return dto;
    } else {
      dto.success = false;
      return dto;
      // throw new HttpException('Invalid email or code', HttpStatus.UNAUTHORIZED);
    }
  }

  async findEmailById(userId: number): Promise<string | undefined> {
    const user = await this.repository.findOne({ where: { id: userId } });

    const email = user.email;
    // console.log(email);
    return email;
  }
}
