import { LinkedList as List, Node } from './linkedlist.js'

// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/circular
// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// function circular(list) {}

// attempt 1
// my solution trying to see if slow and fast ever point to same node
// function circular(list) {
//   let isCircular = false
//   let slow = list.getFirst()
//   let fast = list.getFirst()
//   for (let node of list) {
//     if (fast.next && fast.next.next) {
//       slow = slow.next
//       fast = fast.next.next
//     } else {
//       // reached end
//       isCircular = false
//       break
//     }

//     if (slow === fast) {
//       // circular loop
//       isCircular = true
//       break
//     }
//   }
//   return isCircular
// }

// attempt 2
// algocast solution
// function circular(list) {
//   let slow = list.getFirst()
//   let fast = list.getFirst()

//   while (fast.next && fast.next.next) {
//     slow = slow.next
//     fast = fast.next.next

//     if (slow === fast) return true
//   }

//   return false
// }

// attempt 3
// re-write algocast solution for practice
function circular(list) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
const l = new List()
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
l.head = a
a.next = b
b.next = c
c.next = b
circular(l) // true

export default circular
