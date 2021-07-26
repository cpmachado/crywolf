import logger from './util/logger';
import { defaultAlert, defaultConfiguration } from './defaults';
import { getClient } from './db';

export default class CryWolfDaemon {
  constructor(
    id,
    client,
    configuration = defaultConfiguration,
    triggerAlert = defaultAlert,
  ) {
    if (!(configuration instanceof Object)) {
      throw new ReferenceError(
        'CryWolfDaemon: configuration must be an object',
      );
    }
    this.id = id;
    this.client = client;
    this.db = null;
    this.configuration = {
      ...defaultConfiguration,
      ...configuration,
    };
    this.triggerAlert = triggerAlert;
    this.previous = null;
    this.eventLoop = null;
  }

  async start() {
    logger.info(`Starting CryWolfDaemon ${this.id}`);
    const { interval } = this.configuration;
    const daemon = this;

    if (!(await this.loop())) {
      return;
    }

    this.eventLoop = setInterval(async () => {
      await daemon.loop();
    }, interval);
  }

  async loop() {
    let ore;
    try {
      ore = await this.extract();
      const refined = this.transform(ore);
      await this.load(refined);
    } catch (error) {
      this.stop(error);
      return false;
    }
    return true;
  }

  async extract() {
    const { pair } = this.configuration;

    return this.client.getTicker(pair);
  }

  transform(ore) {
    const { ask: previousAsk } = this.previous || {};
    const { ask } = ore;
    const hasPrevious = this.previous != null;

    this.previous = ore;
    if (!hasPrevious) {
      return { activate: false };
    }

    const { threshold } = this.configuration;
    let deltaAsk = ask - previousAsk;
    let deltaPercAsk = 100;

    if (previousAsk) {
      deltaPercAsk = (deltaAsk * 100) / previousAsk;
    }

    deltaAsk = Number(deltaAsk.toFixed(4));
    deltaPercAsk = Number(deltaPercAsk.toFixed(4));

    const activate = threshold <= Math.abs(deltaPercAsk);
    const delta = {
      deltaPercAsk,
      deltaAsk,
    };

    return { activate, ore, delta };
  }

  async load(refined) {
    const { activate, ore, delta } = refined;

    if (!activate) {
      return;
    }

    const { configuration: config } = this;

    if (!this.db) {
      this.db = await getClient();
    }

    await this.db.insert({ config, ore }).into('events');

    this.triggerAlert(this.configuration, this.previous, delta);
  }

  stop(error = null) {
    if (error) {
      const { message } = error;
      logger.error(message);
    }
    if (this.eventLoop) {
      clearInterval(this.eventLoop);
      this.eventLoop = null;
    }
    logger.info(`Stopping CryWolfDaemon ${this.id}`);
  }

  isOnline() {
    return this.eventLoop !== null;
  }

  setConfiguration(configuration) {
    this.configuration = {
      ...this.configuration,
      ...configuration,
    };
  }
}
