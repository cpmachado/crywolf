import knex from 'knex';
import logger from '../util/logger';

export async function connectDB() {
  let client;
  let retries = 30;
  const timeout = 5000;

  while (retries > 0) {
    try {
      logger.info('attempt to connect to db');
      client = knex({
        client: 'pg',
        connection: {
          host: process.env.POSTGRES_HOST,
          password: process.env.POSTGRES_PASSWORD,
          user: process.env.POSTGRES_USER,
          port: Number(process.env.POSTGRES_PORT),
          database: process.env.POSTGRES_DATABASE,
        },
      });
      logger.info('Success in connecting to db');
      break;
    } catch (error) {
      // eslint-disable-next-line no-await-in-loop
      await Promise.resolve((done) => setTimeout(done, timeout));
      retries -= 1;
    }
  }

  if (!retries) {
    logger.error('Failed to connect to db');
    throw new Error('Failed to connect to db');
  }

  return client;
}

let client = null;

export async function getClient() {
  if (client) {
    return client;
  }
  client = await connectDB();
  return client;
}
