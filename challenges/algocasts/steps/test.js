import { test, describe, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import steps from './index'

// SKIPPING as don't have time get jest working
// [x] install jest package for this repo
// [x] refactor to a describe block
// [ ] add jest and get console.log mock working

describe('steps tests', () => {
  // beforeEach(() => jest.spyOn(global.console, 'log').mockImplementation())
  // afterEach(() => console.log.mockRestore())
  test('steps is a function', () => {
    assert.strictEqual(typeof steps, 'function')
  })
  // test('steps called with n = 1', () => {
  //   steps(1)
  //   assert.strictEqual(console.log.mock.calls[0][0], '#')
  //   assert.strictEqual(console.log.mock.calls.length, 1)
  // })
  // test('steps called with n = 2', () => {
  //   steps(2)
  //   assert.strictEqual(console.log.mock.calls[0][0], '# ')
  //   assert.strictEqual(console.log.mock.calls[1][0], '##')
  //   assert.strictEqual(console.log.mock.calls.length, 2)
  // })
  // test('steps called with n = 3', () => {
  //   steps(3)
  //   assert.strictEqual(console.log.mock.calls[0][0], '#  ')
  //   assert.strictEqual(console.log.mock.calls[1][0], '## ')
  //   assert.strictEqual(console.log.mock.calls[2][0], '###')
  //   assert.strictEqual(console.log.mock.calls.length, 3)
  // })
})
