import { getClient } from '.';
import logger from '../util/logger';

(async () => {
  const db = await getClient();
  try {
    await db.schema.dropTableIfExists('events');
    await db.schema.createTable('events', (table) => {
      table.increments('id');
      table.json('config');
      table.json('ore');
      table.timestamp('created_at').defaultTo('NOW()');
    });
    logger.info('SUCCESS setting up db');
    process.exit(0);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
