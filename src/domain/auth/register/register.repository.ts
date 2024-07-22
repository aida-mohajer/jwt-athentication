import { Repository, QueryRunner } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from 'src/entities/userProfile.entity';

@Injectable()
export class RegisterRepository extends Repository<UserProfile> {
  constructor(
    @InjectRepository(UserProfile)
    private readonly repository: Repository<UserProfile>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
