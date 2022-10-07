import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export default class IdDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}
