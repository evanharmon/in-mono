import test from 'node:test'
import assert from 'node:assert/strict'
import Node from './node.js'
import levelWidth from './index.js'

test('levelWidth is a function', () => {
  assert.strictEqual(typeof levelWidth, 'function')
})

test('levelWidth returns number of nodes at widest point', () => {
  const root = new Node(0)
  root.add(1)
  root.add(2)
  root.add(3)
  root.children[0].add(4)
  root.children[2].add(5)

  assert.deepStrictEqual(levelWidth(root), [1, 3, 2])
})

test('levelWidth returns number of nodes at widest point', () => {
  const root = new Node(0)
  root.add(1)
  root.children[0].add(2)
  root.children[0].add(3)
  root.children[0].children[0].add(4)

  assert.deepStrictEqual(levelWidth(root), [1, 1, 2, 1])
})
