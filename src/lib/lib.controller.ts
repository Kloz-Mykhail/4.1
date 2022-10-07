import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  Render,
  ValidationPipe,
} from '@nestjs/common';
import { GetBooksDto } from './dto/get-books.dto';
import IdDto from './dto/id.dto';
import { GetBookPipe } from './get-book.pipe';
import { LibService } from './lib.service';

@Controller('lib')
export class LibController {
  constructor(private readonly libService: LibService) {}

  @Get()
  @Render('books-page')
  getBooks(@Query(GetBookPipe) query: GetBooksDto) {
    return this.libService.getBooks(query);
  }

  @Get('/books/:id')
  @Render('book-page')
  getBookByID(@Param(ValidationPipe) { id }: IdDto) {
    return this.libService.getBookById(id);
  }

  @Put('/count')
  incrementCount(@Body(ValidationPipe) { id }: IdDto) {
    return this.libService.incrementCount(id);
  }
}
