import test from 'node:test'
import assert from 'node:assert/strict'
import permute from './index.js'

test('permute returns all permutations', () => {
  const arr = [1, 2, 3]
  const exp = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]
  assert.deepStrictEqual(permute(arr), exp)
})
