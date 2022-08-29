import test from 'node:test'
import assert from 'node:assert/strict'
import maxChar from './index'

test('maxChar function exists', () => {
  assert.deepEqual(typeof maxChar, 'function')
})

test('Finds the most frequently used char', () => {
  assert.strictEqual(maxChar('a'), 'a')
  assert.strictEqual(maxChar('abcdefghijklmnaaaaa'), 'a')
})

test('Works with numbers in the string', () => {
  assert.strictEqual(maxChar('ab1c1d1e1f1g1'), '1')
})
