import test from 'node:test'
import assert from 'node:assert/strict'
import chunk from './index'

test('function chunk exists', () => {
  assert.strictEqual(typeof chunk, 'function')
})

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const chunked = chunk(arr, 2)
  const exp = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]

  assert.deepEqual(chunked, exp)
})

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3]
  const chunked = chunk(arr, 1)
  const exp = [[1], [2], [3]]

  assert.deepEqual(chunked, exp)
})

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5]
  const chunked = chunk(arr, 3)
  const exp = [
    [1, 2, 3],
    [4, 5],
  ]

  assert.deepEqual(chunked, exp)
})

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const chunked = chunk(arr, 5)
  const exp = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]

  assert.deepEqual(chunked, exp)
})
