import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { EmailDto } from '../dto/Email.dto';
import { emailCodeDto } from '../dto/emailCode.dto';
import { ReadCodeDto } from '../dto/ReadCode.dto';
import { ReadResVerificationDto } from '../dto/readResVerifcation.dto';
import { EmailVerificationService } from './emailVerification.service';

@Controller('user')
export class EmailVerificationController {
  constructor(
    private readonly emailVerificationService: EmailVerificationService,
  ) {}

  @Post('send-code')
  sendCode(@Body() data: EmailDto): Promise<ReadCodeDto> {
    return this.emailVerificationService.sendCode(data);
  }

  @Post('verify-code')
  verifyCode(@Body() data: emailCodeDto): Promise<ReadResVerificationDto> {
    return this.emailVerificationService.verifyCode(data);
  }
}
