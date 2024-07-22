import { Module } from '@nestjs/common';
import { EmailVerificationModule } from './auth/email-verification/emailVerification.module';
import { RegisterModule } from './auth/register/register.module';
import { AuthProfile } from './auth/user.profile';

@Module({
  imports: [EmailVerificationModule, RegisterModule],
  providers: [AuthProfile],
})
export class DomainModule {}
