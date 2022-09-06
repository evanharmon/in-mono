import Stack from './stack.js'

// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/qfroms
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// class Queue {}

// attempt 1
// class Queue {
//   constructor() {
//     // use two stacks to provide Queue behavior
//     this.stackOne = new Stack()
//     this.stackTwo = new Stack()
//   }

//   add(record) {
//     // r=3, s1=[] s2=[2,1], move s2 to s1, s1=[1,2], add to s1, s1=[1,2,3], and pop and push to s2, s2=[3,2,1]
//     // r=4, s1=[], s2=[3,2,1], move s2 to s1, s1=[1,2,3], add to s1, s1=[1,2,3,4], and pop push back to s2, s2=[4,3,2,1]
//     while (this.stackTwo.peek()) this.stackOne.push(this.stackTwo.pop())
//     this.stackOne.push(record)
//     while (this.stackOne.peek()) this.stackTwo.push(this.stackOne.pop())
//   }

//   remove() {
//     // stackTwo is the queue
//     return this.stackTwo.pop()
//   }

//   peek() {
//     // stackTwo is the queue
//     return this.stackTwo.peek()
//   }
// }

// attempt 2
// same as 1 but from memory
// class Queue {
//   constructor() {
//     this.stackOne = new Stack()
//     this.stackTwo = new Stack() // Queue representation
//   }

//   add(record) {
//     // stackTwo represents the Queue
//     // not safe to use push method against it
//     // move stackTwo in to stackOne for stack representation
//     while (this.stackTwo.peek()) this.stackOne.push(this.stackTwo.pop())
//     // now safe to push new record in to stackOne
//     this.stackOne.push(record)
//     // move stackOne stack representation back to stackTwo for Queue
//     while (this.stackOne.peek()) this.stackTwo.push(this.stackOne.pop())
//   }

//   remove() {
//     return this.stackTwo.pop()
//   }

//   peek() {
//     return this.stackTwo.peek()
//   }
// }

// attempt 3
// algocast solution
// does not re-order in to queue order on each add()
class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.push(record)
  }

  remove() {
    while (this.first.peek()) this.second.push(this.first.pop())

    const record = this.second.pop()

    while (this.second.peek()) this.first.push(this.second.pop())

    return record
  }

  peek() {
    while (this.first.peek()) this.second.push(this.first.pop())

    const record = this.second.peek()

    while (this.second.peek()) this.first.push(this.second.pop())

    return record
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
// q.add(4)
// q.peek() // returns 1
// q.remove() // returns 1
// q.remove() // returns 2

export default Queue
