export const dumpConfig = {
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'mikhail',
    database: process.env.DB_NAME || 'lib',
    port: +(process.env.DB_PORT || 3306),
  },
  dumpToFile: 'database/backups/dump.sql',
};
