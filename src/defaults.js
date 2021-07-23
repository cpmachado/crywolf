import logger from './util/logger';

export function defaultAlert(configuration, ore, delta) {
  const composite = {
    configuration,
    ore,
    delta,
  };
  logger.warn(JSON.stringify(composite));
}

export const defaultConfiguration = {
  pair: 'BTC-USD',
  interval: 5000,
  threshold: 0.01,
};

export default { defaultAlert, defaultConfiguration };
