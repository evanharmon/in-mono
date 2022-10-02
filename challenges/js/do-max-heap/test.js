import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import MaxHeap from './index.js'

const getMaxArray = () => [45, 12, 8, 7, 3]

describe('MaxHeap: index helpers using default values', () => {
  test('gets parent index from child', () => {
    const mh = new MaxHeap(getMaxArray())
    assert.strictEqual(mh.getParentIndex(3), 1)
  })
  test('gets left child index from parent', () => {
    const mh = new MaxHeap(getMaxArray())
    const result = mh.getLeftChildIndex(0)
    assert.strictEqual(result, 1)
  })
  test('gets right child index from parent', () => {
    const mh = new MaxHeap(getMaxArray())
    const result = mh.getRightChildIndex(0)
    assert.strictEqual(result, 2)
  })
})

describe('MaxHeap: index helpers', () => {
  test('gets parent index from child', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.add(item)
    assert.strictEqual(mh.getParentIndex(3), 1)
  })
  test('gets left child index from parent', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.add(item)
    const result = mh.getLeftChildIndex(0)
    assert.strictEqual(result, 1)
  })
  test('gets right child index from parent', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.add(item)
    const result = mh.getRightChildIndex(0)
    assert.strictEqual(result, 2)
  })
})

describe('MaxHeap: add', () => {
  test('inserts and bubbles up', () => {
    const mh = new MaxHeap()
    mh.add(12)
    mh.add(45)
    assert.strictEqual(mh.values[0], 45)
    assert.strictEqual(mh.values[1], 12)
  })
})

describe('MaxHeap: extractMax', () => {
  test('extracts max value and reorders', () => {
    const mh = new MaxHeap()
    for (const item of getMaxArray()) mh.add(item)
    const result = mh.extractMax()
    assert.strictEqual(result, 45)
    assert.strictEqual(mh.values[0], 12)
  })
})
