import 'dotenv/config'
import assert from 'assert'

const envKeys = <const>['MESSAGE'] // Add keys like 'PORT', 'SECRET', 'DATABASE_URL', etc.

// Assert that the env keys are set
for (const envKey of envKeys) {
  assert(
    process.env[envKey],
    `Environment variable '${envKey}' is not set. Add it to .env!`,
  )
}
