import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Render,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthFilter } from 'src/auth/auth.filter';
import { GetBooksDto } from 'src/lib/dto/get-books.dto';
import { GetBookPipe } from 'src/lib/get-book.pipe';

import IdDto from '../lib/dto/id.dto';
import { AdminService } from './admin.service';
import { AddBookBodyDto } from './dto/add-book.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AuthGuard('basic'))
  @Get('/')
  @UseFilters(AuthFilter)
  @Render('admin-books-page')
  getAdminBooks(@Query(GetBookPipe) query: GetBooksDto) {
    return this.adminService.getAdminBooks(query);
  }

  @UseGuards(AuthGuard('basic'))
  @Get('delete/:id')
  @Redirect('/admin')
  @UseFilters(AuthFilter)
  deleteBook(@Param(ValidationPipe) { id }: IdDto) {
    return this.adminService.deleteBook(id);
  }

  @UseGuards(AuthGuard('basic'))
  @Post('add')
  @UseInterceptors(FileInterceptor('img'))
  @UseFilters(AuthFilter)
  @Redirect('/admin')
  addBook(
    @Body(ValidationPipe) body: AddBookBodyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.adminService.addBook(body, file);
  }
}
