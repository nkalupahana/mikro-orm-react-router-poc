import { type Options, SqliteDriver } from '@mikro-orm/sqlite';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config = {
  driver: SqliteDriver,
  dbName: 'sqlite.db',
  entities: ['build/server/*.d.ts'],
  entitiesTs: ['app/entities/*.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  preferTs: true,
} satisfies Options;

export default config;