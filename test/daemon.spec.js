import SDK from '@uphold/uphold-sdk-javascript';
import CryWolfDaemon from '../src/daemon';
import { defaultConfiguration, defaultAlert } from '../src/defaults';

describe('CryWolfDaemon', () => {
  const id = '0x00';
  let daemon;

  beforeAll(() => {
    const sdk = new SDK({
      clientId: 'placeholder',
      clientSecret: 'placeholder',
    });
    daemon = new CryWolfDaemon(id, sdk);
  });

  it('should be instanceof CryWolfDaemon', () => {
    expect(daemon).toBeInstanceOf(CryWolfDaemon);
  });

  it('should have id = 0x00', () => {
    const { id: daemonId } = daemon;

    expect(daemonId).toEqual(id);
  });

  it('should have configuration = defaultConfiguration', () => {
    const { configuration } = daemon;

    expect(configuration).toEqual(defaultConfiguration);
  });

  it('should have triggerAlert = defaultAlert', () => {
    const { triggerAlert } = daemon;

    expect(triggerAlert).toEqual(defaultAlert);
  });

  it('should be offline', () => {
    expect(daemon.isOnline()).toBe(false);
  });
});
