import { LinkedList as List } from './linkedlist.js'

// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/fromlast
// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.

// attempt 1
// gotcha - n is zero based index on for loop
// function fromLast(list, n) {
//   let slow = list.head
//   let fast = list.head
//   // iterate and move `fast` ahead by `n`
//   for (let i = 0; i <= n; i++) fast = fast.next
//   // loop to end of list
//   while (fast) {
//     slow = slow.next
//     fast = fast.next
//   }
//   // slow will now be `n` spaces back from `fast`
//   return slow
// }

// attempt 2
// algocast solution
// function fromLast(list, n) {
//   let slow = list.getFirst()
//   let fast = list.getFirst()
//   while (n > 0) {
//     fast = fast.next
//     n--
//   }

//   while (fast.next) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

// attempt 3
// rewrite algocast solution
// function fromLast(list, n) {
//   let slow = list.getFirst()
//   let fast = list.getFirst()
//   while (n > 0) {
//     fast = fast.next
//     n--
//   }
//   while (fast.next) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

// attempt 4
// rewrite with for loop
// adjust while loop to look at `fast.next`
// makes more sense to me
function fromLast(list, n) {
  let slow = list.getFirst()
  let fast = list.getFirst()
  for (let i = 0; i < n; i++) fast = fast.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

// debugging
const list = new List()
list.insertLast('a')
list.insertLast('b')
list.insertLast('c')
list.insertLast('d')
fromLast(list, 2).data // 'b'

export default fromLast
