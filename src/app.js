import SDK from '@uphold/uphold-sdk-javascript';
import CryWolfBot from './bot';

const client = new SDK({
  clientId: 'placeholder',
  clientSecret: 'placeholder',
});

const bot = new CryWolfBot('0x00', client);

bot.addDaemon();
bot.start();
