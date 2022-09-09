import test from 'node:test'
import assert from 'node:assert/strict'
import Node from './index.js'

test('Node is a constructor', () => {
  assert.strictEqual(typeof Node.prototype.constructor, 'function')
})

test('Node can insert correctly', () => {
  const node = new Node(10)
  node.insert(5)
  node.insert(15)
  node.insert(17)

  assert.strictEqual(node.left.data, 5)
  assert.strictEqual(node.right.data, 15)
  assert.strictEqual(node.right.right.data, 17)
})

test('Contains returns node with the same data', () => {
  const node = new Node(10)
  node.insert(5)
  node.insert(15)
  node.insert(20)
  node.insert(0)
  node.insert(-5)
  node.insert(3)

  const three = node.left.left.right
  assert.deepStrictEqual(node.contains(3), three)
})

test('Contains returns null if value not found', () => {
  const node = new Node(10)
  node.insert(5)
  node.insert(15)
  node.insert(20)
  node.insert(0)
  node.insert(-5)
  node.insert(3)

  assert.strictEqual(node.contains(9999), null)
})
