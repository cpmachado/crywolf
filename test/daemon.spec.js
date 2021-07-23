import CryWolfDaemon from '../src/daemon';

describe('CryWolfDaemon', () => {
  const id = '0x00';
  let daemon;

  beforeAll(() => {
    daemon = new CryWolfDaemon(id);
  });

  it('should be instanceof CryWolfDaemon', () => {
    expect(daemon).toBeInstanceOf(CryWolfDaemon);
  });

  it('should be have id = 0x00', () => {
    const { id: daemonId } = daemon;

    expect(daemonId).toEqual(id);
  });
});
