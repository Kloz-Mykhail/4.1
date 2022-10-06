import { ApiProperty } from '@nestjs/swagger';

export type IBook = {
  title: string;
  year: number;
  pages: number;
  about: string;
  id: number;
  count: number;
  deleted: boolean;
};
export type IBookWithAuthors = IBook & { author_name: string };

export class BookWithAuthors {
  @ApiProperty()
  title: string;
  @ApiProperty()
  year: number;
  @ApiProperty()
  pages: number;
  @ApiProperty()
  about: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  count: number;
  @ApiProperty()
  deleted: boolean;
  @ApiProperty()
  author: string;
}
export class Ok {
  @ApiProperty()
  ok: boolean;
}
