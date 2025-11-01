import { type Options, SqliteDriver } from '@mikro-orm/sqlite';
import { User } from './app/entities/user';

const config = {
  driver: SqliteDriver,
  dbName: 'sqlite.db',
  entities: [User],
  debug: true,
} satisfies Options;

export default config;