import { readFileSync } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class IntitalMigrations1664615113904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'up', '1_initial_up.sql'),
        'utf-8',
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      readFileSync(
        join('database', 'migrations', 'down', '1_initial_down.sql'),
        'utf-8',
      ),
    );
  }
}
