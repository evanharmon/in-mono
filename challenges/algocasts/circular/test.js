import test from 'node:test'
import assert from 'node:assert/strict'
import circular from './index.js'
import { LinkedList as List, Node } from './linkedlist.js'

test('circular is a function', () => {
  assert.strictEqual(typeof circular, 'function')
})

test('circular detects circular linked lists', () => {
  const l = new List()
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')

  l.head = a
  a.next = b
  b.next = c
  c.next = b

  assert.strictEqual(circular(l), true)
})

test('circular detects circular linked lists linked at the head', () => {
  const l = new List()
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')

  l.head = a
  a.next = b
  b.next = c
  c.next = a

  assert.strictEqual(circular(l), true)
})

test('circular detects non-circular linked lists', () => {
  const l = new List()
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')

  l.head = a
  a.next = b
  b.next = c
  c.next = null

  assert.strictEqual(circular(l), false)
})
