import test from 'node:test'
import assert from 'node:assert/strict'
import reverseInt from './index'

test('ReverseInt function exists', () => {
  assert.deepEqual(typeof reverseInt, 'function')
})

test('ReverseInt handles 0 as an input', () => {
  assert.strictEqual(reverseInt(0), 0)
})

test('ReverseInt flips a positive number', () => {
  assert.strictEqual(reverseInt(5), 5)
  assert.strictEqual(reverseInt(15), 51)
  assert.strictEqual(reverseInt(90), 9)
  assert.strictEqual(reverseInt(2359), 9532)
})

test('ReverseInt flips a negative number', () => {
  assert.strictEqual(reverseInt(-5), -5)
  assert.strictEqual(reverseInt(-15), -51)
  assert.strictEqual(reverseInt(-90), -9)
  assert.strictEqual(reverseInt(-2359), -9532)
})
