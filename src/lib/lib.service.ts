import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetBooksDto } from './dto/get-books.dto';
import { IBookWithAuthors } from './lib.interface';
import { Author } from './models/author.model';
import { Book } from './models/book.model';
import { BookAuthor } from './models/books-authors.model';

@Injectable()
export class LibService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async incrementCount(id: number) {
    await this.bookRepository
      .createQueryBuilder()
      .update()
      .set({ count: () => 'count + 1' })
      .where('id = :id', { id })
      .execute();
    return { ok: true };
  }
  async getBookById(id: number) {
    return await this.bookRepository
      .createQueryBuilder()
      .select([
        'book.id',
        'book.title',
        'book.year',
        'book.pages',
        'book.about',
      ])
      .addSelect('GROUP_CONCAT(author.author SEPARATOR ", ")', 'author_name')
      .innerJoin(BookAuthor, 'b_a', 'book.id = b_a.book_id')
      .innerJoin(Author, 'author', 'b_a.author_id = author.id')
      .where('book.id = :id', { id })
      .groupBy('book.id')
      .getRawOne<IBookWithAuthors>();
  }

  async getBooks({ offset, count, search, author, year }: GetBooksDto) {
    const books = await this.bookRepository
      .createQueryBuilder()
      .select(['book.id', 'book.title'])
      .addSelect('GROUP_CONCAT(author.author SEPARATOR ", ")', 'author_name')
      .innerJoin(BookAuthor, 'b_a', 'book.id = b_a.book_id')
      .innerJoin(Author, 'author', 'b_a.author_id = author.id')
      .where('book.title LIKE :title', { title: search })
      .andWhere(' book.year LIKE :year', { year })
      .andWhere(' book.deleted = false')
      .having('author_name LIKE :author', { author })
      .groupBy('book.id')
      .limit(count)
      .offset(offset)
      .getRawMany<IBookWithAuthors>();
    return {
      books,
      title: 'lib',
      pag: {
        isLastPage: books.length <= offset + count,
        isFirstPage: offset === 0,
        totalPageNumber: offset / count + 1,
        numberPages: Math.floor(books.length / count) + 1,
      },
      helpers: {
        selectPage(pageNumber: number) {
          return `lib?offset=${
            (+pageNumber - 1) * count
          }&count=${count}&search=${search}&author=${author}&year=${year}`;
        },
        times(n: number, block: any) {
          let accum = '';
          for (let i = 0; i < n; ++i) {
            accum += block.fn(i);
          }
          return accum;
        },
      },
    };
  }
}
