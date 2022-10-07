import { IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
export class AddBookBodyDto {
  @IsString()
  title: string;
  @IsInt()
  @Type(() => Number)
  year: number;
  @IsInt()
  @Type(() => Number)
  pages: number;
  @IsString()
  about: string;
  @IsString()
  author: string;
}
