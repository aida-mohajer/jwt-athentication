import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DomainModule } from './domain/domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BootStrapauModule } from './bootstrap/bootstrap.module';



@Module({
  imports: [
    DomainModule,
    BootStrapauModule,
  ],
  controllers: [AppController],
  providers: [DomainModule, BootStrapauModule],
})
export class AppModule {}
