import SDK from '@uphold/uphold-sdk-javascript';
import CryWolfBot from '../src/bot';

describe('CryWolfBot', () => {
  const id = '0x00';
  let bot;

  beforeAll(() => {
    const sdk = new SDK({
      clientId: 'placeholder',
      clientSecret: 'placeholder',
    });
    bot = new CryWolfBot(id, sdk);
  });

  it('should be instanceof CryWolfBot', () => {
    expect(bot).toBeInstanceOf(CryWolfBot);
  });

  it('should be have id = 0x00', () => {
    const { id: botId } = bot;

    expect(botId).toEqual(id);
  });

  it('should have daemons = []', () => {
    const { daemons } = bot;

    expect(daemons).toEqual([]);
  });

  it('should have turn online', () => {
    expect(!bot.online);
    bot.start();
    expect(bot.online);
  });

  it('should have a daemon', () => {
    const { daemons } = bot;

    bot.stop();
    bot.addDaemon();

    expect(daemons.length).toEqual(1);
  });
});
