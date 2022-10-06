import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookAuthor {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  book_id: number;
  @ApiProperty()
  @Column()
  author_id: string;
  @ApiProperty()
  @Column({ default: false })
  deleted: boolean;
}
