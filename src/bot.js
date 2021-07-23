import logger from './util/logger';
import CryWolfDaemon from './daemon';

export default class CryWolfBot {
  constructor(id, client) {
    this.id = id;
    this.client = client;
    this.daemons = [];
    this.online = false;
  }

  start() {
    logger.info(`Starting CryWolfBot ${this.id}`);
    this.online = true;
    this.daemons.forEach((e) => e.start());
  }

  stop() {
    logger.info(`Stopping CryWolfBot ${this.id}`);
    this.online = false;
    this.daemons.forEach((e) => e.stop());
  }

  addDaemon(configuration = null, triggerAlert = null) {
    const id = this.daemons.reduce(
      (previous, current) => Math.max(previous, current.id),
      0,
    );
    const daemon = new CryWolfDaemon(id, this.client);
    if (configuration) {
      daemon.setConfiguration(configuration);
    }
    if (triggerAlert) {
      daemon.triggerAlert = triggerAlert;
    }

    this.daemons.push(daemon);

    if (this.online) {
      daemon.start();
    }
  }
}
