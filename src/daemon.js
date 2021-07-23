import logger from './util/logger';

export default class CryWolfDaemon {
  constructor(id) {
    this.id = id;
  }

  start() {
    logger.info(`Starting CryWolfDaemon ${this.id}`);
  }

  stop() {
    logger.info(`Stopping CryWolfDaemon ${this.id}`);
  }
}
