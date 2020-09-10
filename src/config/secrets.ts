import 'dotenv/config'
import assert from 'assert'

/** A list of environment variables that this application requires to be set. */
const envKeys = <const>[] // Add keys like 'PORT', 'SECRET', 'DATABASE_URL', etc.

// Assert that the env keys are set
for (const envKey of envKeys) {
  assert(
    process.env[envKey],
    `Environment variable '${envKey}' is not set. Add it to .env!`,
  )
}
