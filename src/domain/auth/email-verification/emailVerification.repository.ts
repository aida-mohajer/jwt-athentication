import { Profile } from 'src/entities/profile.entity';
import { Repository, QueryRunner } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmailVerificationRepository extends Repository<Profile> {
  constructor(
    @InjectRepository(Profile)
    private readonly repository: Repository<Profile>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
