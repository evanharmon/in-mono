import test from 'node:test'
import assert from 'node:assert/strict'
import fib from './index'

test('function fib exists', () => {
  assert.strictEqual(typeof fib, 'function')
})

test('calculates correct fib value for 1', () => {
  assert.strictEqual(fib(1), 1)
})

test('calculates correct fib value for 2', () => {
  assert.strictEqual(fib(2), 1)
})

test('calculates correct fib value for 3', () => {
  assert.strictEqual(fib(3), 2)
})

test('calculates correct fib value for 4', () => {
  assert.strictEqual(fib(4), 3)
})

test('calculates correct fib value for 15', () => {
  assert.strictEqual(fib(39), 63245986)
})
