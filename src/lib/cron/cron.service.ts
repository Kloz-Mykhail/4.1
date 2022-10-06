import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';
import { Id } from '../../admin/admin.interface';
import { Repository } from 'typeorm';
import { Book } from '../models/book.model';
import { BookAuthor } from '../models/books-authors.model';
import dump from 'mysqldump';
import { dumpConfig } from '../../configs/lib-dump.config';

@Injectable()
export class CronService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    @InjectRepository(BookAuthor)
    private readonly bookAuthorRepository: Repository<BookAuthor>,
  ) {}

  @Cron(CronExpression.EVERY_HOUR, { name: 'softDelete' })
  async cleanDeletedBook() {
    (
      await this.bookRepository
        .createQueryBuilder()
        .select('id')
        .where('deleted = true')
        .getRawMany<Id>()
    ).forEach((el) => {
      const id = el.id;
      const pathToImg = join('static', 'img', 'books', `${id}.jpg`);
      if (existsSync(pathToImg)) {
        rmSync(pathToImg);
      }
    });
    this.bookRepository.createQueryBuilder().delete().where('deleted = true');
    this.bookAuthorRepository
      .createQueryBuilder()
      .delete()
      .where('deleted = true');
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT, { name: 'lib-dump' })
  makeDump() {
    dump(dumpConfig);
  }
}
