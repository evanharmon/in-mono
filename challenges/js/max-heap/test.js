import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import MaxHeap from './index.js'

const getMaxArray = () => [22, 38, 43, 39, 27, 1, 3, 12, 50]

describe('MaxHeap: index helpers', () => {
  test('gets parent index from child', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    assert.strictEqual(mh.parentIndex(3), 1)
  })
  test('gets left child index from parent', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    const result = mh.leftChildIndex(0)
    assert.strictEqual(result, 1)
  })
  test('gets right child index from parent', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    const result = mh.rightChildIndex(0)
    assert.strictEqual(result, 2)
  })
})

describe('MaxHeap: swap', () => {
  test('swap should work', () => {
    const mh = new MaxHeap()
    const arr = getMaxArray()
    for (const item of Array.from({ length: 2 }, (_, i) => arr[i]))
      mh.insert(item)
  })
})

describe('MaxHeap: insert', () => {
  test('inserts and bubbles up', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    assert.strictEqual(mh.heap[0], 50)
  })
})

describe('MaxHeap: delete', () => {
  test('returns max value and reorders', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    const beforeLn = mh.heap.length
    const result = mh.delete()
    assert.strictEqual(result, 50)
    assert.strictEqual(mh.heap[0], 43)
    assert.strictEqual(beforeLn - 1, mh.heap.length)
  })
  test('emptying heap results in empty heap', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.insert(item)
    const sortedArr = Array.from({ length: mh.heap.length }, () => mh.delete())
    assert.deepStrictEqual(mh.heap, [])
    let priorVal = sortedArr[0]
    for (let i = 1; i < sortedArr.length; i++) {
      const currVal = sortedArr[i]
      assert.ok(priorVal > currVal)
      priorVal = currVal
    }
  })
})
