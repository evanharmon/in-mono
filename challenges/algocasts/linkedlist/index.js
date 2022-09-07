// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/linkedlist
// see link for directions https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/linkedlist/directions.html
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// attempt 1
// my solution before watching video sections
// class LinkedList {
//   constructor() {
//     this.head = null // DO NOT create head node
//   }
//   // EH: note, algocast solution used a shortcut to make this all one line of code
//   insertFirst(data) {
//     // if no node exists at head, create it
//     if (!this.head) {
//       this.head = new Node(data)
//     } else {
//       // head exists, do not overwrite
//       // save old head node
//       const oldNode = this.head
//       // create new node with data and oldNode as next
//       const newNode = new Node(data, oldNode)
//       // make newNode head
//       this.head = newNode
//     }
//   }
//   size() {
//     // start counter at 0 since new LinkedList is empty
//     let counter = 0
//     let node = this.head
//     while (node) {
//       counter++
//       node = node.next
//     }
//     return counter
//   }
//   getFirst() {
//     return this.head
//   }
//   getLast() {
//     let node = this.head
//     while (node) {
//       if (!node.next) return node
//       node = node.next
//     }
//     return node
//   }
//   clear() {
//     this.head = null
//   }
//   removeFirst() {
//     // head could be empty
//     if (!this.head) return
//     this.head = this.head.next
//   }
//   removeLast() {
//     // case where list is empty
//     if (!this.head) return

//     // case where only one node exists
//     if (!this.head.next) {
//       this.head = null
//       return
//     }

//     // assumes at least one node exists
//     // keep track of second to last node
//     let previous = this.head
//     // keep track of last node which will be the tail
//     let node = this.head.next
//     // find tail node
//     while (node.next) {
//       previous = node
//       node = node.next
//     }
//     // set node previous to tail to next = null
//     previous.next = null
//   }
//   insertLast(data) {
//     const newNode = new Node(data) // last so next = null
//     // handle empty case
//     if (!this.head) {
//       this.head = newNode
//       return
//     }
//     let node = this.head
//     // find last node
//     while (node.next) {
//       node = node.next
//     }
//     node.next = newNode
//   }
//   // zero indexed
//   getAt(n) {
//     // track counter to know when to stop
//     let counter = 0
//     // track node for return
//     let node = this.head // handles empty case
//     // loop through nodes, return early if `n` is reached
//     while (node) {
//       // return if at n
//       if (counter === n) return node
//       node = node.next
//       counter++
//     }
//     // handle case where n > last node
//     // tail node reached but less than n, return null
//     return null
//   }
//   // attempt 1 for removeAt
//   // removeAt(index) {
//   //   // return early if empty
//   //   if (!this.head) return null

//   //   // [x] handle index=0 as below loop tracks previous assuming index > 0
//   //   if (index === 0) {
//   //     this.head = this.head.next
//   //     return
//   //   }

//   //   if (index > 0 && !this.head.next) return null
//   //   // track previous node for linkage
//   //   let previous = this.head
//   //   // track index node
//   //   let node = this.head.next
//   //   // counter for tracking
//   //   let counter = 1
//   //   // loop through nodes until index found
//   //   while (node) {
//   //     if (counter === index) break
//   //     counter++
//   //     previous = node
//   //     node = node.next
//   //   }

//   //   // [x] case: don't crash on out of bounds
//   //   if (index > counter) return null

//   //   // case: handle remove at end
//   //   if (!node.next) {
//   //     previous.next = null
//   //   } else {
//   //     // case: handle remove (splice) at middle
//   //     // prevNext is node, so set to node.next
//   //     previous.next = node.next
//   //   }

//   //   // return null as tail reached and below index
//   //   return null
//   // }
//   // attempt2 for a cleaner removeAt
//   // this is rough bc of the explicit if statement checks
//   // removeAt(index) {
//   //   // - no crash on empty list
//   //   if (!this.head) return

//   //   let counter = 0
//   //   let previous = null
//   //   let node = this.head
//   //   // find node
//   //   while (node) {
//   //     if (counter === index) break
//   //     counter++
//   //     previous = node
//   //     node = node.next
//   //   }

//   //   // - index greater than node length
//   //   if (!node) return

//   //   if (!previous) {
//   //     // handle delete first node case
//   //     this.head = this.head.next
//   //   } else if (!node.next) {
//   //     // delete tail node
//   //     previous.next = null
//   //   } else {
//   //     // splice
//   //     previous.next = node.next
//   //   }
//   // }
//   // attempt 3 re-writing much cleaner algocast solution
//   removeAt(index) {
//     if (!this.head) return // handles empty case

//     if (index === 0) {
//       this.head = this.head.next
//       return
//     }

//     const previous = this.getAt(index - 1)
//     // handle case where previous or NEXT index doesn't exist
//     if (!previous || !previous.next) return null
//     // fancy splice, take previous, skip over next node, and connect to next.next
//     previous.next = previous.next.next
//   }
//   insertAt(data, index) {
//     // [x] create new node out of data
//     const newNode = new Node(data)
//     // [x] case: handle empty list and index !== 0
//     if (!this.head && index !== 0) return

//     // [x] handle simple case of insert on empty and insert at first
//     if (index === 0) {
//       newNode.next = this.head
//       this.head = newNode
//       return
//     }

//     // [x] find previous node at index (index - 1)
//     // ex: previous = 1, nodeAtIndex = 2
//     const previous = this.getAt(index - 1)
//     // [x] handle index out of bounds by appending to last
//     if (!previous) {
//       const last = this.getLast()
//       last.next = newNode
//       return
//     }
//     // [x] handle insert at last, meaning index node won't exist yet
//     if (!previous.next) {
//       previous.next = newNode
//       return
//     }
//     // [x] handle insert at middle
//     newNode.next = previous.next
//     previous.next = newNode
//   }
//   forEach(fn) {
//     // iterate through list
//     // run function against each node
//     // scope ?

//     // empty list case
//     if (!this.head) return

//     let node = this.head
//     while (node) {
//       fn(node)
//       node = node.next
//     }
//   }
//   // iterator
//   *[Symbol.iterator]() {
//     let node = this.head
//     while (node) {
//       yield node
//       node = node.next
//     }
//   }
// }

// attempt 2
// re-factor `*First` and `*Last` methods to just be helpers for common `*At` methods
class LinkedList {
  constructor() {
    this.head = null // DO NOT create head node
  }
  size() {
    // start counter at 0 since new LinkedList is empty
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
  insertLast(data) {
    const newNode = new Node(data) // last so next = null
    // handle empty case
    if (!this.head) {
      this.head = newNode
      return
    }
    let node = this.head
    // find last node
    while (node.next) {
      node = node.next
    }
    node.next = newNode
  }
  // zero indexed
  getAt(n) {
    // track counter to know when to stop
    let counter = 0
    // track node for return
    let node = this.head // handles empty case
    // loop through nodes, return early if `n` is reached
    while (node) {
      // return if at n
      if (counter === n) return node
      node = node.next
      counter++
    }
    // handle case where n > last node
    // tail node reached but less than n, return null
    return null
  }
  getFirst() {
    return this.getAt(0)
  }
  getLast() {
    let node = this.head
    while (node) {
      if (!node.next) return node
      node = node.next
    }
    return node
  }
  // attempt 3 re-writing much cleaner algocast solution
  removeAt(index) {
    if (!this.head) return // handles empty case

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    // handle case where previous or NEXT index doesn't exist
    if (!previous || !previous.next) return null
    // fancy splice, take previous, skip over next node, and connect to next.next
    previous.next = previous.next.next
  }
  removeFirst() {
    return this.removeAt(0)
  }
  removeLast() {
    // case where list is empty
    if (!this.head) return

    // case where only one node exists
    if (!this.head.next) {
      this.head = null
      return
    }

    // assumes at least one node exists
    // keep track of second to last node
    let previous = this.head
    // keep track of last node which will be the tail
    let node = this.head.next
    // find tail node
    while (node.next) {
      previous = node
      node = node.next
    }
    // set node previous to tail to next = null
    previous.next = null
  }
  insertAt(data, index) {
    // [x] create new node out of data
    const newNode = new Node(data)
    // [x] case: handle empty list and index !== 0
    if (!this.head && index !== 0) return

    // [x] handle simple case of insert on empty and insert at first
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }

    // [x] find previous node at index (index - 1)
    // ex: previous = 1, nodeAtIndex = 2
    const previous = this.getAt(index - 1)
    // [x] handle index out of bounds by appending to last
    if (!previous) {
      const last = this.getLast()
      last.next = newNode
      return
    }
    // [x] handle insert at last, meaning index node won't exist yet
    if (!previous.next) {
      previous.next = newNode
      return
    }
    // [x] handle insert at middle
    newNode.next = previous.next
    previous.next = newNode
  }
  insertFirst(data) {
    return this.insertAt(data, 0)
  }
  forEach(fn) {
    let node = this.head
    while (node) {
      fn(node)
      node = node.next
    }
  }
  // iterator
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

// algocast solution
// class LinkedList {
//   constructor() {
//     this.head = null
//   }
//   insertFirst(data) {
//     this.head = new Node(data, this.head)
//   }
//   size() {
//     let counter = 0
//     let node = this.head
//     while (node) {
//       counter++
//       node = node.next
//     }
//     return counter
//   }
//   getFirst() {
//     return this.head
//   }
//   getLast() {
//     if (!this.head) return null
//     let node = this.head
//     while (node) {
//       if (!node.next) return node
//       node = node.next
//     }
//   }
//   clear() {
//     this.head = null
//   }
//   removeFirst() {
//     // head could be empty
//     if (!this.head) return
//     this.head = this.head.next
//   }
//   removeLast() {
//     // same as my solution
//     if (!this.head) return
//     if (!this.head.next) {
//       this.head = null
//       return
//     }

//     let previous = this.head
//     let node = this.head.next
//     while (node.next) {
//       previous = node
//       node = node.next
//     }
//     previous.next = null
//   }
//   insertLast(data) {
//     const last = this.getLast()
//     if (last) {
//       last.next = new Node(data)
//     } else {
//       this.head = new Node(data)
//     }
//   }
//   getAt(index) {
//     let counter = 0
//     let node = this.head
//     while (node) {
//       if (counter === index) return node
//       counter++
//       node = node.next
//     }
//     return null
//   }
//   removeAt(index) {
//     if (!this.head) return

//     if (index === 0) {
//       this.head = this.head.next
//       return
//     }

//     const previous = this.getAt(index - 1)
//     if (!previous || !previous.next) return // handles out of bounds
//     previous.next = previous.next.next
//   }
//   insertAt(data, index) {
//     if (!this.head) {
//       this.head = new Node(data)
//       return
//     }

//     if (index === 0) {
//       this.head = new Node(data, this.head)
//       return
//     }

//     const previous = this.getAt(index - 1) || this.getLast() // smart!
//     const node = new Node(data, previous.next)
//     previous.next = node
//   }
//   forEach(fn) {
//     let node = this.head
//     let counter = 0
//     while (node) {
//       fn(node, counter)
//       node = node.next
//       counter++
//     }
//   }
//   *[Symbol.iterator]() {
//     let node = this.head
//     while (node) {
//       yield node
//       node = node.next
//     }
//   }
// }

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// const l = new LinkedList()
// l.insertFirst(1)
// l.insertFirst(2)
// l.insertFirst(3)
// l.getLast()
// l.removeLast()

export { Node, LinkedList }
