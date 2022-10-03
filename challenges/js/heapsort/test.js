import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import heapSort from './index.js'

const getArrays = () => [
  [50, 43, 38, 22, 39, 27, 1, 3, 12],
  [45, 12, 8, 7, 3],
  [4, 10, 21, 11, 12, 18, 19],
]

const getSortedArray = () => [
  1, 3, 3, 4, 7, 8, 10, 11, 12, 12, 12, 18, 19, 21, 22, 27, 38, 39, 43, 45, 50,
]

describe('heapSort', () => {
  test('sorts multiple arrays of diff lengths', () => {
    const arrays = getArrays()
    const result = heapSort(arrays)
    console.log(result)
    assert.strictEqual(result.length, 21)
    assert.deepStrictEqual(result, getSortedArray())
  })
})
