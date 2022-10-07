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
