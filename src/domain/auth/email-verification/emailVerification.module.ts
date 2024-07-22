import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { AuthProfile } from '../user.profile';
import { EmailVerificationRepository } from './emailVerification.repository';
import { EmailVerificationController } from './emailVerification.controller';
import { EmailVerificationService } from './emailVerification.service';
import { EventService } from './event-emitter';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserProfile } from 'src/entities/userProfile.entity';
import { RegisterService } from '../register/register.service';
import { RegisterRepository } from '../register/register.repository';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserProfile,
      Profile,
      EmailVerificationRepository,
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  controllers: [EmailVerificationController],
  exports: [EmailVerificationService],
  providers: [
    EmailVerificationService,
    RegisterService,
    EmailVerificationRepository,
    RegisterRepository,
    AuthProfile,
    EventService,
    AuthService,
  ],
})
export class EmailVerificationModule {}
