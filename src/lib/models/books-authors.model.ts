import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookAuthor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  book_id: number;
  @Column()
  author_id: string;
  @Column({ default: false })
  deleted: boolean;
}
