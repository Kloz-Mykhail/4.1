import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetBooksDto } from './dto/get-books.dto';
import IdDto from './dto/id.dto';
import { GetBookPipe } from './get-book.pipe';
import { BookWithAuthors, Ok } from './lib.interface';
import { LibService } from './lib.service';

@ApiTags('lib')
@Controller('lib')
export class LibController {
  constructor(private readonly libService: LibService) {}
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    type: [BookWithAuthors],
  })
  @Get()
  getBooks(@Query(GetBookPipe) query: GetBooksDto) {
    return this.libService.getBooks(query);
  }

  @ApiOperation({ summary: 'Get one book by id' })
  @ApiResponse({
    status: 200,
    type: BookWithAuthors,
  })
  @Get('/books/:id')
  getBookByID(@Param(ValidationPipe) { id }: IdDto) {
    return this.libService.getBookById(id);
  }
  @ApiOperation({ summary: 'Increment count of clicks on book' })
  @ApiResponse({
    status: 200,
    type: Ok,
  })
  @ApiBody({ type: IdDto })
  @Put('/count')
  incrementCount(@Body(ValidationPipe) { id }: IdDto) {
    return this.libService.incrementCount(id);
  }
}
