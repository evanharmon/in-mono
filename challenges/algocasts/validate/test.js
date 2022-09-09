import test from 'node:test'
import assert from 'node:assert/strict'
import Node from './node.js'
import validate from './index.js'

test('Validate recognizes a valid BST', () => {
  const n = new Node(10)
  n.insert(5)
  n.insert(15)
  n.insert(0)
  n.insert(20)

  debugger
  assert.strictEqual(validate(n), true)
})

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10)
  n.insert(5)
  n.insert(15)
  n.insert(0)
  n.insert(20)
  n.left.left.right = new Node(999)

  assert.strictEqual(validate(n), false)
})
