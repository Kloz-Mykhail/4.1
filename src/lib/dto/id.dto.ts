import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export default class IdDto {
  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  id: number;
}
