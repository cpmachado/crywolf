import SDK from '@uphold/uphold-sdk-javascript';
import fs from 'fs/promises';
import CryWolfBot from './bot';
import configValidator from './util/configValidator';

const client = new SDK({
  clientId: 'placeholder',
  clientSecret: 'placeholder',
});

function setupBot(name = '0x00', configs = []) {
  const bot = new CryWolfBot(name, client);

  if (configs.length < 1) {
    bot.addDaemon();
  }
  configs.forEach((e) => bot.addDaemon(e));
  bot.start();
}

function validateConfigs(name, configs) {
  if (!(configs instanceof Array) && !configs.length) {
    throw new Error(`Invalid ${name} config, should be a non empty array`);
  }

  configs.forEach((e) => {
    const { error } = configValidator.validate(e);
    if (error) {
      throw error;
    }
  });
}

async function processConfig(filename) {
  const rawData = await fs.readFile(filename);
  const bots = JSON.parse(rawData.toString());

  Object.keys(bots).forEach((name) => validateConfigs(name, bots[name]));
  Object.keys(bots).forEach((name) => setupBot(name, bots[name]));
}

async function main() {
  const [configFile] = process.argv.slice(2);

  if (!configFile) {
    setupBot();
    return;
  }
  processConfig(configFile);
}

main();
