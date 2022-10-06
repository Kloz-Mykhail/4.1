import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './configs/orm.config';
import { LibModule } from './lib/lib.module';
import { AdminModule } from './admin/admin.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

const environment = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${environment}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    ScheduleModule.forRoot(),
    LibModule,
    AdminModule,
  ],
})
export class AppModule {}
