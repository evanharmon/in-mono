import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import { LinkedList as List, Node } from './linkedlist.js'

// test('List is a class', () => {
//   assert.strictEqual(typeof List.prototype.constructor, 'function')
// })

// test('Node is a class', () => {
//   assert.strictEqual(typeof Node.prototype.constructor, 'function')
// })

describe.skip('A Node', () => {
  test('has properties "data" and "next"', () => {
    const node = new Node('a', 'b')
    assert.strictEqual(node.data, 'a')
    assert.strictEqual(node.next, 'b')
  })
})

describe.skip('Insert First', () => {
  test('appends a node to the start of the list', () => {
    const l = new List()
    l.insertFirst(1)
    assert.strictEqual(l.head.data, 1)
    l.insertFirst(2)
    assert.strictEqual(l.head.data, 2)
  })
})

describe.skip('Size', () => {
  test('returns the number of items in the linked list', () => {
    const l = new List()
    assert.strictEqual(l.size(), 0)
    l.insertFirst(1)
    l.insertFirst(1)
    l.insertFirst(1)
    l.insertFirst(1)
    assert.strictEqual(l.size(), 4)
  })
})

describe.skip('GetFirst', () => {
  test('returns the first element', () => {
    const l = new List()
    l.insertFirst(1)
    assert.strictEqual(l.getFirst().data, 1)
    l.insertFirst(2)
    assert.strictEqual(l.getFirst().data, 2)
  })
})

describe.skip('GetLast', () => {
  test('returns the last element', () => {
    const l = new List()
    l.insertFirst(2)
    assert.deepStrictEqual(l.getLast(), new Node(2))
    l.insertFirst(1)
    assert.deepStrictEqual(l.getLast(), new Node(2))
  })
})

describe.skip('Clear', () => {
  test('empties out the list', () => {
    const l = new List()
    assert.strictEqual(l.size(), 0)
    l.insertFirst(1)
    l.insertFirst(1)
    l.insertFirst(1)
    l.insertFirst(1)
    assert.strictEqual(l.size(), 4)
    l.clear()
    assert.strictEqual(l.size(), 0)
  })
})

describe.skip('RemoveFirst', () => {
  test('removes the first node when the list has a size of one', () => {
    const l = new List()
    l.insertFirst('a')
    l.removeFirst()
    assert.strictEqual(l.size(), 0)
    assert.strictEqual(l.getFirst(), null)
  })

  test('removes the first node when the list has a size of three', () => {
    const l = new List()
    l.insertFirst('c')
    l.insertFirst('b')
    l.insertFirst('a')
    l.removeFirst()
    assert.strictEqual(l.size(), 2)
    assert.strictEqual(l.getFirst().data, 'b')
    l.removeFirst()
    assert.strictEqual(l.size(), 1)
    assert.strictEqual(l.getFirst().data, 'c')
  })
})

describe.skip('RemoveLast', () => {
  test('RemoveLast removes the last node when list is empty', () => {
    const l = new List()
    assert.doesNotThrow(() => l.removeLast())
  })

  test('RemoveLast removes the last node when list is length 1', () => {
    const l = new List()
    l.insertFirst('a')
    l.removeLast()
    assert.strictEqual(l.head, null)
  })

  test('RemoveLast removes the last node when list is length 2', () => {
    const l = new List()
    l.insertFirst('b')
    l.insertFirst('a')

    l.removeLast()

    assert.strictEqual(l.size(), 1)
    assert.strictEqual(l.head.data, 'a')
  })

  test('RemoveLast removes the last node when list is length 3', () => {
    const l = new List()
    l.insertFirst('c')
    l.insertFirst('b')
    l.insertFirst('a')
    l.removeLast()

    assert.strictEqual(l.size(), 2)
    assert.strictEqual(l.getLast().data, 'b')
  })
})

describe.skip('InsertLast', () => {
  test('adds to the end of the list', () => {
    const l = new List()
    l.insertFirst('a')
    l.insertLast('b')

    assert.strictEqual(l.size(), 2)
    assert.strictEqual(l.getLast().data, 'b')
  })
})

describe.skip('GetAt', () => {
  test('returns the node at given index', () => {
    const l = new List()
    assert.strictEqual(l.getAt(10), null)

    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)

    assert.strictEqual(l.getAt(0).data, 1)
    assert.strictEqual(l.getAt(1).data, 2)
    assert.strictEqual(l.getAt(2).data, 3)
    assert.strictEqual(l.getAt(3).data, 4)
  })
})

describe.skip('RemoveAt', () => {
  test('removeAt doesnt crash on an empty list', () => {
    const l = new List()
    assert.doesNotThrow(() => {
      l.removeAt(0)
      l.removeAt(1)
      l.removeAt(2)
    })
  })

  test('removeAt doesnt crash on an index out of bounds', () => {
    const l = new List()
    assert.doesNotThrow(() => {
      const l = new List()
      l.insertFirst('a')
      l.removeAt(1)
    })
  })

  test('removeAt deletes the first node', () => {
    const l = new List()
    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)
    assert.strictEqual(l.getAt(0).data, 1)
    l.removeAt(0)
    assert.strictEqual(l.getAt(0).data, 2)
  })

  test('removeAt deletes the node at the given index', () => {
    const l = new List()
    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)
    assert.strictEqual(l.getAt(1).data, 2)
    l.removeAt(1)
    assert.strictEqual(l.getAt(1).data, 3)
  })

  test('removeAt works on the last node', () => {
    const l = new List()
    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)
    assert.strictEqual(l.getAt(3).data, 4)
    l.removeAt(3)
    assert.strictEqual(l.getAt(3), null)
  })
})

describe.skip('InsertAt', () => {
  test('inserts a new node with data at the 0 index when the list is empty', () => {
    const l = new List()
    l.insertAt('hi', 0)
    assert.strictEqual(l.getFirst().data, 'hi')
  })

  test('inserts a new node with data at the 0 index when the list has elements', () => {
    const l = new List()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertAt('hi', 0)
    assert.strictEqual(l.getAt(0).data, 'hi')
    assert.strictEqual(l.getAt(1).data, 'a')
    assert.strictEqual(l.getAt(2).data, 'b')
    assert.strictEqual(l.getAt(3).data, 'c')
  })

  test('inserts a new node with data at a middle index', () => {
    const l = new List()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertLast('d')
    l.insertAt('hi', 2)
    assert.strictEqual(l.getAt(0).data, 'a')
    assert.strictEqual(l.getAt(1).data, 'b')
    assert.strictEqual(l.getAt(2).data, 'hi')
    assert.strictEqual(l.getAt(3).data, 'c')
    assert.strictEqual(l.getAt(4).data, 'd')
  })

  test('inserts a new node with data at a last index', () => {
    const l = new List()
    l.insertLast('a')
    l.insertLast('b')
    l.insertAt('hi', 2)
    assert.strictEqual(l.getAt(0).data, 'a')
    assert.strictEqual(l.getAt(1).data, 'b')
    assert.strictEqual(l.getAt(2).data, 'hi')
  })

  test('insert a new node when index is out of bounds', () => {
    const l = new List()
    l.insertLast('a')
    l.insertLast('b')
    l.insertAt('hi', 30)

    assert.strictEqual(l.getAt(0).data, 'a')
    assert.strictEqual(l.getAt(1).data, 'b')
    assert.strictEqual(l.getAt(2).data, 'hi')
  })
})

describe.skip('ForEach', () => {
  test('applies a transform to each node', () => {
    const l = new List()

    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)

    l.forEach(node => {
      node.data += 10
    })

    assert.strictEqual(l.getAt(0).data, 11)
    assert.strictEqual(l.getAt(1).data, 12)
    assert.strictEqual(l.getAt(2).data, 13)
    assert.strictEqual(l.getAt(3).data, 14)
  })
})

describe.skip('for...of loops', () => {
  test('works with the linked list', () => {
    const l = new List()

    l.insertLast(1)
    l.insertLast(2)
    l.insertLast(3)
    l.insertLast(4)

    for (let node of l) {
      node.data += 10
    }

    assert.strictEqual(l.getAt(0).data, 11)
    assert.strictEqual(l.getAt(1).data, 12)
    assert.strictEqual(l.getAt(2).data, 13)
    assert.strictEqual(l.getAt(3).data, 14)
  })

  test('for...of works on an empty list', () => {
    const l = new List()
    assert.doesNotThrow(() => {
      for (let node of l) {
      }
    })
  })
})
