import test from 'node:test'
import assert from 'node:assert/strict'
import fromLast from './index.js'
import { LinkedList as List } from './linkedlist.js'

test('fromLast is a function', () => {
  assert.strictEqual(typeof fromLast, 'function')
})

test('fromLast returns the node n elements from the end', () => {
  const l = new List()

  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  l.insertLast('d')
  l.insertLast('e')

  assert.strictEqual(fromLast(l, 3).data, 'b')
})
