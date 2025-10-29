import { defineConfig } from '@mikro-orm/sqlite';
import cliConfig from '../mikro-orm.config';
import { User } from './entities/user';

const config = defineConfig({
  ...cliConfig,
  entitiesTs: [User]
});

export default config;