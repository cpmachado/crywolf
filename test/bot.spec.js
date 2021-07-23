import CryWolfBot from '../src/daemon';

describe('CryWolfBot', () => {
  const id = '0x00';
  let bot;

  beforeAll(() => {
    bot = new CryWolfBot(id);
  });

  it('should be instanceof CryWolfBot', () => {
    expect(bot).toBeInstanceOf(CryWolfBot);
  });

  it('should be have id = 0x00', () => {
    const { id: botId } = bot;

    expect(botId).toEqual(id);
  });
});
