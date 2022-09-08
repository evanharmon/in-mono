class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
// re-write from scratch
class LinkedList {
  constructor() {
    this.head = null
  }
  insertAt(data, index) {
    // if index is 0, do simple insert at start
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    // have to get previous node to re-link
    // if null getLast for easier to read code
    let previous = this.getAt(index - 1) || this.getLast()
    // handle empty list / out of bounds by inserting at head
    if (!previous) {
      this.head = new Node(data)
      return
    }

    // handle middle of list insert
    previous.next = new Node(data, previous.next)
  }
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }
  insertLast(data) {
    const newNode = new Node(data)
    // handle empty case first
    if (!this.head) {
      this.head = newNode
      return
    }

    const last = this.getLast()
    last.next = newNode
  }
  getLast() {
    let node = this.head
    while (node) {
      if (!node.next) break // reached last node
      node = node.next
    }
    return node
  }
  getAt(index) {
    if (index === 0) return this.head

    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) return node
      node = node.next
      counter++
    }

    return null
  }
  getFirst() {
    return this.getAt(0)
  }
  removeAt(index) {
    // handle empty list
    if (!this.head) return null

    // handle index 0 with or without more nodes
    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    // return if index out of bounds
    if (!previous || !previous.next) return null
    // skip over to drop node at index
    previous.next = previous.next.next
  }
  removeFirst() {
    this.removeAt(0)
  }
  removeLast() {
    // handle empty list
    if (!this.head) return null

    // handle list with only head node
    if (!this.head.next) {
      this.head = null
      return
    }

    // handle list with multiple nodes
    let previous = this.head
    let last = this.head.next
    while (last) {
      if (!last.next) break
      previous = last
      last = last.next
    }
    previous.next = null
  }
  size() {
    let counter = 0
    let node = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }
  clear() {
    this.head = null
  }
  forEach(fn) {
    let counter = 0
    let node = this.head
    while (node) {
      fn(node, counter)
      counter++
      node = node.next
    }
  }
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

export default LinkedList
export { LinkedList, Node }
