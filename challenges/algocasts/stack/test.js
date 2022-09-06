import test from 'node:test'
import assert from 'node:assert/strict'
import Stack from './index'

test('function Stack exists', () => {
  assert.strictEqual(typeof Stack.prototype.constructor, 'function')
})

test('stack can add and remove items', () => {
  const s = new Stack()
  s.push(1)
  assert.strictEqual(s.pop(), 1)
  s.push(2)
  assert.strictEqual(s.pop(), 2)
})

test('stack can follows first in, last out', () => {
  const s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  assert.strictEqual(s.pop(), 3)
  assert.strictEqual(s.pop(), 2)
  assert.strictEqual(s.pop(), 1)
})

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  assert.strictEqual(s.peek(), 3)
  assert.strictEqual(s.pop(), 3)
  assert.strictEqual(s.peek(), 2)
  assert.strictEqual(s.pop(), 2)
  assert.strictEqual(s.peek(), 1)
  assert.strictEqual(s.pop(), 1)
})
