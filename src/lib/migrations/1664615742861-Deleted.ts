import { readFileSync } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Deleted1664615742861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'up', '3_deleted_up.sql'),
        'utf-8',
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'down', '3_deleted_up.sql'),
        'utf-8',
      ),
    );
  }
}
