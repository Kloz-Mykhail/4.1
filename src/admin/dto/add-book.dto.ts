import { IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class AddBookBodyDto {
  @IsString()
  @ApiProperty()
  title: string;
  @IsInt()
  @Type(() => Number)
  @ApiProperty()
  year: number;
  @IsInt()
  @Type(() => Number)
  @ApiProperty()
  pages: number;
  @IsString()
  @ApiProperty()
  about: string;
  @IsString()
  @ApiProperty()
  author: string;
}
