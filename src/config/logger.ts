import { createLogger, transports, format } from 'winston'
const { combine, timestamp, printf, colorize, json } = format

/** Log messages to the console should have color based on level along with a timestamp. */
const consoleFormat = combine(
  colorize(),
  timestamp(),
  printf(
    ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`,
  ),
)

/** Log messages to a file should be in JSON format with a timestamp. */
const fileFormat = combine(timestamp(), json())

/** Winston logger, used for all logging. Visit https://github.com/winstonjs/winston to see example usage.*/
const logger = createLogger({
  format: fileFormat,
  transports: [
    new transports.File({ filename: 'combined.log' }),
    new transports.Console({
      format: consoleFormat,
    }),
  ],
})

export default logger
