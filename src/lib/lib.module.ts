import { Module } from '@nestjs/common';
import { LibService } from './lib.service';
import { LibController } from './lib.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './models/book.model';
import { Author } from './models/author.model';
import { BookAuthor } from './models/books-authors.model';
import { CronService } from './cron/cron.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author, BookAuthor])],
  controllers: [LibController],
  providers: [LibService, CronService],
  exports: [LibService],
})
export class LibModule {}
