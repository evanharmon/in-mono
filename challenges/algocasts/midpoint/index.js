import LinkedList from './linkedlist.js'

// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/midpoint
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// function midpoint(list) {}

// attempt 1
// my solution based on slow / fast suggestion
// function midpoint(list) {
//   // slow moves ahead one node at a time
//   let slow = list.head
//   // fast moves at twice the speed (2:1 ratio)
//   let fast = list.head
//   while (slow) {
//     // break early if a node doesn't exist 2 ahead
//     if (!fast.next || !fast.next.next) break
//     fast = fast.next.next
//     slow = slow.next
//   }

//   return slow
// }

// attempt 2
// algocast solution
function midpoint(list) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// const l = new LinkedList()
// l.insertLast('a')
// l.insertLast('b')
// l.insertLast('c')
// midpoint(l) // returns { data: 'b' }

export default midpoint
