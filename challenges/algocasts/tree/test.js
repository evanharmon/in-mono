import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import { Tree, Node } from './index.js'

describe('Node', () => {
  test('Node is a constructor', () => {
    assert.strictEqual(typeof Node.prototype.constructor, 'function')
  })

  test('Node has a data and children properties', () => {
    const n = new Node('a')
    assert.strictEqual(n.data, 'a')
    assert.strictEqual(n.children.length, 0)
  })

  test('Node can add children', () => {
    const n = new Node('a')
    n.add('b')
    assert.strictEqual(n.children.length, 1)
    assert.deepStrictEqual(n.children[0].children, [])
  })

  test('Node can remove children', () => {
    const n = new Node('a')
    n.add('b')
    assert.strictEqual(n.children.length, 1)
    n.remove('b')
    assert.strictEqual(n.children.length, 0)
  })
})

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree()
    assert.strictEqual(t.root, null)
  })

  test('Can traverse bf', () => {
    const letters = []
    const t = new Tree()
    t.root = new Node('a')
    t.root.add('b')
    t.root.add('c')
    t.root.children[0].add('d')
    t.traverseBF(node => letters.push(node.data))
    assert.deepStrictEqual(letters, ['a', 'b', 'c', 'd'])
  })

  test('Can traverse DF', () => {
    const letters = []
    const t = new Tree()
    t.root = new Node('a')
    t.root.add('b')
    t.root.add('d')
    t.root.children[0].add('c')
    t.traverseDF(node => letters.push(node.data))
    assert.deepStrictEqual(letters, ['a', 'b', 'c', 'd'])
  })
})
