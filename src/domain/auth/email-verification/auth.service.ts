import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createJwt(email: string, id: number) {
    const payload = { email, id };
    const jwtToken = await this.jwtService.signAsync(payload);
    return jwtToken;
  }
}
