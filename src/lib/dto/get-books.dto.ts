import { ApiProperty } from '@nestjs/swagger';

export class GetBooksDto {
  @ApiProperty({ required: false, default: 0 })
  offset: number;
  @ApiProperty({ required: false, default: 20 })
  count: number;
  @ApiProperty({ required: false })
  search: string;
  @ApiProperty({ required: false })
  author: string;
  @ApiProperty({ required: false })
  year: number;
}
