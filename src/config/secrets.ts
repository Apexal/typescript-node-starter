import dotenv from 'dotenv'
import assert from 'assert'
dotenv.config()

const envKeys = <const>[] // Add keys like 'PORT', 'SECRET', 'DATABASE_URL', etc.

for (const envKey of envKeys) {
  assert(
    process.env[envKey],
    `Environment variable '${envKey}' is not set. Add it to .env!`,
  )
}
