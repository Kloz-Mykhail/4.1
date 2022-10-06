import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { Author } from '../lib/models/author.model';
import { Book } from '../lib/models/book.model';
import { BookAuthor } from '../lib/models/books-authors.model';
import { Repository } from 'typeorm';
import { Id } from './admin.interface';
import { AddBookBodyDto } from './dto/add-book.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    @InjectRepository(BookAuthor)
    private readonly bookAuthorRepository: Repository<BookAuthor>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async addBook(
    { title, year, pages, about, author }: AddBookBodyDto,
    img: Express.Multer.File,
  ) {
    await this.bookRepository
      .createQueryBuilder()
      .insert()
      .into(Book)
      .values([{ title, year, pages, about }])
      .execute();
    const book_id = (
      await this.bookRepository
        .createQueryBuilder()
        .select('MAX(id)', 'id')
        .getRawOne<{ id: number }>()
    ).id;
    author.split(/\s*,\s*/).forEach(async (authorName) => {
      await this.authorRepository
        .createQueryBuilder()
        .insert()
        .into(Author, ['author'])
        .values({ author: authorName })
        .orIgnore()
        .execute();
      const author_id = await this.authorRepository
        .createQueryBuilder()
        .select('id')
        .where('author = :authorName', { authorName })
        .getRawOne<Id>();
      await this.bookAuthorRepository
        .createQueryBuilder()
        .insert()
        .into(BookAuthor, ['book_id', 'author_id'])
        .values({ book_id, author_id: String(author_id) });
    });
    writeFileSync(join('static', 'img', 'books', `${book_id}.jpg`), img.buffer);

    return { ok: true };
  }

  async deleteBook(id: number) {
    await this.bookRepository
      .createQueryBuilder()
      .update()
      .set({ deleted: true })
      .where('id = :id', { id })
      .execute();
    await this.bookAuthorRepository
      .createQueryBuilder()
      .update()
      .set({ deleted: true })
      .where('book_id = :id', { id }).execute;
    return { ok: true };
  }
}
