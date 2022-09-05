// https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/queue/index.js
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// attempt 1
// class Queue {
//   constructor() {
//     this.queue = []
//   }
//   add(n) {
//     this.queue.unshift(n)
//   }
//   remove() {
//     return this.queue.pop()
//   }
// }

// attempt 2
// same as 1 but from memory
// class Queue {
//   constructor() {
//     this.queue = []
//   }
//   add(n) {
//     // maintain order so push to n - 1
//     this.queue.unshift(n)
//   }
//   remove() {
//     // ensure order so pop off first item
//     return this.queue.pop()
//   }
// }

// attempt 3
// algocast solution
class Queue {
  constructor() {
    this.data = []
  }
  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// const q = new Queue()
// q.add(1)
// q.add(2)
// q.add(3)
// q.remove()
// q.remove()
// q.remove()

export default Queue
