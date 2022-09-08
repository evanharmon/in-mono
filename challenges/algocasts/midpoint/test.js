import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import midpoint from './index.js'
import { LinkedList } from './linkedlist.js'

test('Midpoint is a function', () => {
  assert.strictEqual(typeof midpoint, 'function')
})

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    assert.strictEqual(midpoint(l).data, 'b')
  })

  test('when the list has 5 elements', () => {
    const l = new LinkedList()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertLast('d')
    l.insertLast('e')
    assert.strictEqual(midpoint(l).data, 'c')
  })
})

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList()
    l.insertLast('a')
    l.insertLast('b')
    assert.strictEqual(midpoint(l).data, 'a')
  })

  test('when the list has 4 elements', () => {
    const l = new LinkedList()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertLast('d')
    assert.strictEqual(midpoint(l).data, 'b')
  })
})
