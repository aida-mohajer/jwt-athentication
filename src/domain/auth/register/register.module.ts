import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from 'src/entities/userProfile.entity';
import { RegisterRepository } from './register.repository';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { AuthProfile } from '../user.profile';
import { AuthGuard } from '../auth.guard';
import { Profile } from 'src/entities/profile.entity';
import { EmailVerificationService } from '../email-verification/emailVerification.service';
import { EmailVerificationRepository } from '../email-verification/emailVerification.repository';
import { EventService } from '../email-verification/event-emitter';
import { AuthService } from '../email-verification/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile, UserProfile, RegisterRepository]),
  ],
  controllers: [RegisterController],
  exports: [RegisterService],
  providers: [
    RegisterService,
    EmailVerificationService,
    EmailVerificationRepository,
    RegisterRepository,
    AuthProfile,
    AuthGuard,
    EventService,
    AuthService,
  ],
})
export class RegisterModule {}
