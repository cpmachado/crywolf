import logger from './util/logger';
import CryWolfDaemon from './daemon';

export default class CryWolfBot {
  constructor(id) {
    this.id = id;
    this.daemons = [];
  }

  start() {
    logger.info(`Starting CryWolfBot ${this.id}`);
    this.daemons = [new CryWolfDaemon(1)];
    this.daemons.forEach((e) => e.start());
  }

  stop() {
    logger.info(`Stopping CryWolfBot ${this.id}`);
    this.daemons.forEach((e) => e.stop());
  }
}
