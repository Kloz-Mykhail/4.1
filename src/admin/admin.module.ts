import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../lib/models/book.model';
import { Author } from '../lib/models/author.model';
import { BookAuthor } from '../lib/models/books-authors.model';
import { BasicAuthModule } from '../auth/basic-auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Author, BookAuthor]),
    BasicAuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
