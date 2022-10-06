import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { conn } from './conn.config';
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'mikhail',
  database: process.env.DB_NAME || 'lib',
  port: +(process.env.DB_PORT || 3306),

  entities: ['dist/**/*.model{.js,.ts}'],
  synchronize: true,
  dropSchema: false,
  logging: true,
  migrations: ['dist/**/migrations/*{.js, .ts}'],
  migrationsTableName: 'migrations_typeorm',
  // cli: {},
};
export default config;
