import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class GetBookPipe implements PipeTransform {
  transform(value: any) {
    const offset = +((value.offset || 0) >= 0 ? value.offset || 0 : 0);
    const count = +(value.count || 20);
    const search =
      value.search && /^[^%]+$/.test(value.search as string)
        ? `%${value.search}%`
        : '%';

    const author = `${value.author || '%'}`;
    const year = `${value.year || '%'}`;
    return { offset, count, search, author, year };
  }
}
