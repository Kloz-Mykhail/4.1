import { Column, Entity } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @Column()
  title: string;
  @Column()
  year: number;
  @Column()
  pages: number;
  @Column()
  about: string;
  @Column({ primary: true, generated: 'increment' })
  id: number;
  @Column({ default: 0 })
  count: number;
  @Column({ default: false })
  deleted: boolean;
}
