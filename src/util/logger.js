import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(format.colorize({ all: true }), format.simple()),
});

export default logger;
