import { readFileSync } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class LotAuthors1664615534160 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'up', '2_lotAuthors_up.sql'),
        'utf-8',
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'down', '2_lotAuthors_down.sql'),
        'utf-8',
      ),
    );
  }
}
