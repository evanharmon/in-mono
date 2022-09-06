import test from 'node:test'
import assert from 'node:assert/strict'
import Queue from './queue.js'
import weave from './index.js'

test('queues have a peek function', () => {
  const q = new Queue()
  assert.strictEqual(typeof q.peek, 'function')
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

test('weave is a function', () => {
  assert.strictEqual(typeof weave, 'function')
})

test('weave can combine two queues', () => {
  const one = new Queue()
  one.add(1)
  one.add(2)
  one.add(3)
  one.add(4)
  const two = new Queue()
  two.add('one')
  two.add('two')
  two.add('three')
  two.add('four')

  const result = weave(one, two)
  assert.strictEqual(result.remove(), 1)
  assert.strictEqual(result.remove(), 'one')
  assert.strictEqual(result.remove(), 2)
  assert.strictEqual(result.remove(), 'two')
  assert.strictEqual(result.remove(), 3)
  assert.strictEqual(result.remove(), 'three')
  assert.strictEqual(result.remove(), 4)
  assert.strictEqual(result.remove(), 'four')
  assert.strictEqual(result.remove(), undefined)
})
