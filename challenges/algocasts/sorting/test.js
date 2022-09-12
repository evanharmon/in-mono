import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import { bubbleSort, selectionSort, mergeSort, merge } from './index.js'

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7]
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500]
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    assert.deepStrictEqual(bubbleSort(getArray()), getSortedArray())
  })
})

describe('Selection sort', () => {
  test('sorts an array', () => {
    assert.deepStrictEqual(selectionSort(getArray()), getSortedArray())
  })
})

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10]
    const right = [2, 8, 12]

    assert.deepStrictEqual(merge(left, right), [1, 2, 8, 10, 12])
  })

  test('sorts an array', () => {
    assert.deepStrictEqual(mergeSort(getArray()), getSortedArray())
  })
})
