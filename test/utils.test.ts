// https://jestjs.io/docs/en/getting-started

import { getFirstChar } from '../src/utils'

test('test getFirstChar method', () => {
  expect(getFirstChar('Hello world')).toBe('H')
})
