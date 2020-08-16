import dotenv from 'dotenv'
dotenv.config()

import { createLogger, transports, format } from 'winston'

const logger = createLogger({
  transports: [new transports.File({ filename: 'combined.log' })],
})

// Only log to console if not in production
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  )
}

export default logger
