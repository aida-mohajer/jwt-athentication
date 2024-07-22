import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth.guard';
import { CreateUserDto } from '../dto/createUser.dto';
import { ReadUserDto } from '../dto/ReadUser.dto';
import { RegisterService } from './register.service';

@Controller('user')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @UseGuards(AuthGuard)
  // @ApiBearerAuth('access-token')
  @Post('register')
  register(@Body() data: CreateUserDto, @Request() req): Promise<ReadUserDto> {
    const userId = req['user'].id;
    // console.log(userId);

    return this.registerService.register(data, userId);
  }
}
