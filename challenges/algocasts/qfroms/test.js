import test from 'node:test'
import assert from 'node:assert/strict'
import Queue from './index'

test('Queue is a class', () => {
  assert.strictEqual(typeof Queue.prototype.constructor, 'function')
})

test('can add elements to a queue', () => {
  const q = new Queue()
  assert.doesNotThrow(() => q.add(1))
})

test('can remove elements from a queue', () => {
  const q = new Queue()
  assert.doesNotThrow(() => {
    q.add(1)
    q.remove()
  })
})

test('Order of elements is maintained', () => {
  const q = new Queue()
  q.add(1)
  q.add(2)
  q.add(3)
  assert.strictEqual(q.remove(), 1)
  assert.strictEqual(q.remove(), 2)
  assert.strictEqual(q.remove(), 3)
  assert.strictEqual(q.remove(), undefined)
})

test('peek returns, but does not remove, the first value', () => {
  const q = new Queue()
  q.add(1)
  q.add(2)
  assert.strictEqual(q.peek(), 1)
  assert.strictEqual(q.peek(), 1)
  assert.strictEqual(q.remove(), 1)
  assert.strictEqual(q.remove(), 2)
})
