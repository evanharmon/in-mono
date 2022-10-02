import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import MinHeap from './index.js'

const getMinArray = () => [50, 43, 38, 22, 39, 27, 1, 3, 12]

describe('MinHeap: index helpers', () => {
  test('gets parent index from child', () => {
    const mh = new MinHeap()
    for (const item of getMinArray()) mh.insert(item)
    assert.strictEqual(mh.parentIndex(3), 1)
  })
  test('gets left child index from parent', () => {
    const mh = new MinHeap()
    for (const item of getMinArray()) mh.insert(item)
    const result = mh.leftChildIndex(0)
    assert.strictEqual(result, 1)
  })
  test('gets right child index from parent', () => {
    const mh = new MinHeap()
    for (const item of getMinArray()) mh.insert(item)
    const result = mh.rightChildIndex(0)
    assert.strictEqual(result, 2)
  })
})

describe('MinHeap: swap', () => {
  test('swap should work', () => {
    const mh = new MinHeap()
    const arr = getMinArray()
    for (const item of Array.from({ length: 2 }, (_, i) => arr[i]))
      mh.insert(item)
  })
})

describe('MinHeap: insert', () => {
  test('inserts and bubbles up', () => {
    const mh = new MinHeap()
    for (const item of getMinArray()) mh.insert(item)
    assert.strictEqual(mh.heap[0], 1)
  })
})

describe('MinHeap: delete', () => {
  test('returns min value and reorders', () => {
    const mh = new MinHeap()
    for (const item of getMinArray()) mh.insert(item)
    const result = mh.delete()
    assert.strictEqual(result, 1)
    assert.strictEqual(mh.heap[0], 3)
    assert.strictEqual(mh.heap[mh.heap.length - 1], 50)
  })
})
