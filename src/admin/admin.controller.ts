import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBasicAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import IdDto from '../lib/dto/id.dto';
import { Ok } from '../lib/lib.interface';
import { AdminService } from './admin.service';
import { AddBookBodyDto } from './dto/add-book.dto';
@ApiBasicAuth()
@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Delete book' })
  @ApiResponse({
    status: 200,
    type: Ok,
  })
  @UseGuards(AuthGuard('basic'))
  @Delete('delete/:id')
  deleteBook(@Param(ValidationPipe) { id }: IdDto) {
    return this.adminService.deleteBook(id);
  }

  @ApiOperation({ summary: 'Add new book' })
  @ApiResponse({
    status: 201,
    type: Ok,
  })
  @UseGuards(AuthGuard('basic'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: AddBookBodyDto })
  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
  addBook(
    @Body(new ValidationPipe()) body: AddBookBodyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.adminService.addBook(body, file);
  }
}
