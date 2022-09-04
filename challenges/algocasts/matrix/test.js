import test from 'node:test'
import assert from 'node:assert/strict'
import matrix from './index'

test('matrix is a function', () => {
  assert.strictEqual(typeof matrix, 'function')
})

test('matrix produces a 2x2 array', () => {
  const m = matrix(2)
  assert.strictEqual(m.length, 2)
  assert.deepEqual(m[0], [1, 2])
  assert.deepEqual(m[1], [4, 3])
})

test('matrix produces a 3x3 array', () => {
  const m = matrix(3)
  assert.strictEqual(m.length, 3)
  assert.deepEqual(m[0], [1, 2, 3])
  assert.deepEqual(m[1], [8, 9, 4])
  assert.deepEqual(m[2], [7, 6, 5])
})

test('matrix produces a 4x4 array', () => {
  const m = matrix(4)
  assert.strictEqual(m.length, 4)
  assert.deepEqual(m[0], [1, 2, 3, 4])
  assert.deepEqual(m[1], [12, 13, 14, 5])
  assert.deepEqual(m[2], [11, 16, 15, 6])
  assert.deepEqual(m[3], [10, 9, 8, 7])
})
