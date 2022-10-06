import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @ApiProperty()
  @Column()
  title: string;
  @Column()
  @ApiProperty()
  year: number;
  @ApiProperty()
  @Column()
  pages: number;
  @ApiProperty()
  @Column()
  about: string;
  @ApiProperty()
  @Column({ primary: true, generated: 'increment' })
  id: number;
  @ApiProperty()
  @Column({ default: 0 })
  count: number;
  @ApiProperty()
  @Column({ default: false })
  deleted: boolean;
}
