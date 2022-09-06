// https://raw.githubusercontent.com/StephenGrider/AlgoCasts/master/exercises/weave
import Queue from './queue.js'

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
// function weave(sourceOne, sourceTwo) {}

// attempt 1
// my solution was same as algocast
// weave merges two queues in an alternating fashion
// queues can be diff lengths, so check for undefined before merging
// returned queue must be made inside weave function
function weave(sourceOne, sourceTwo) {
  const result = new Queue()
  // Queue class doesn't have a `length` value so this will be inefficient
  // loop until both source queues undefined
  while (sourceOne.peek() || sourceTwo.peek()) {
    let s1Peek = sourceOne.peek()
    let s2Peek = sourceTwo.peek()
    if (s1Peek) result.add(sourceOne.remove())
    if (s2Peek) result.add(sourceTwo.remove())
  }

  return result
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// const queueOne = new Queue()
// queueOne.add(1)
// queueOne.add(2)
// const queueTwo = new Queue()
// queueTwo.add('Hi')
// queueTwo.add('There')
// const q = weave(queueOne, queueTwo)
// q.remove() // 1
// q.remove() // 'Hi'
// q.remove() // 2
// q.remove() // 'There'

export default weave
