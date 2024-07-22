import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { RegisterRepository } from './register.repository';
import { UserProfile } from 'src/entities/userProfile.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import { ReadUserDto } from '../dto/ReadUser.dto';
import { EmailVerificationService } from '../email-verification/emailVerification.service';

@Injectable()
export class RegisterService extends TypeOrmCrudService<UserProfile> {
  constructor(
    private readonly repository: RegisterRepository,
    private readonly emailVerificationService: EmailVerificationService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    super(repository);
  }

  async register(data: CreateUserDto, userId: number): Promise<ReadUserDto> {
    const email = await this.emailVerificationService.findEmailById(userId);
    // console.log(email);
    const existUser = await this.repository.findOne({
      where: { email: email },
    });
    if (existUser) {
      return this.mapper.map(existUser, UserProfile, ReadUserDto);
    }
    const user = this.mapper.map(data, CreateUserDto, UserProfile);
    const date = new Date();
    user.email = email;
    user.createdDate = date;
    const result = await this.repository.save(user);
    return this.mapper.map(result, UserProfile, ReadUserDto);
  }
}
