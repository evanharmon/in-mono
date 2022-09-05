// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/fib
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// function fib(n) {}

// attempt 1
// my iterative solution
// function fib(n) {
//   // store fibonacci sequence
//   // simplify by pre-filling array with 0 values
//   // ex. n=1 [0, 1], n=2 [0, 1, 1], n=3 [0, 1, 1, 2], n=4 [0, 1, 1, 2, 3]
//   const seq = Array.from(Array(n), () => 0)
//   // generate fib entries thru n
//   for (let i = 0; i <= n; i++) {
//     // handle first two separately
//     // n=1, [0, 1]
//     if (i === 0 || i === 1) seq[i] = i
//     else {
//       // n >= 2 here
//       // each num is the sum of the preceeding two
//       seq[i] = seq[i - 2] + seq[i - 1]
//     }
//   }

//   // return last sequence entry
//   return seq[n]
// }

// attempt 2
// my recursive solution
// i like this because the full array is never managed
// only previous two values stay in memory
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// function fib(n, counter = 1, prevVal = 0, sum = 1) {
//   // important tracking variables
//   // counter: sequence index
//   // prevVal: previous value in fib sequence
//   // sum: latest value in fib sequence

//   // handles n = 0 and n = 1 case to allow param defaults when n > 1
//   if (n < 2) return n

//   // base case
//   // return curr value which is the sum of two preceeding
//   if (n === counter) return sum

//   counter++
//   return fib(n, counter, sum, prevVal + sum)
// }

// attempt 3
// re-write attempt 3 from scratch for practice
// fib seq looks like [0, 1, 1, 2, 3, 5, 8]
// function fib(n, counter = 1, prevVal = 0, sum = 1) {
//   // first two values of a fib sequence are [0,1]
//   // handle n=0, and n=1 calls without recursion as the return value is the same as n
//   if (n < 2) return n

//   // important info to track
//   // fib sequence: current value is two preceeding
//   // counter: avoid modifying n, start at 1 to allow a counter++ and recursive call for n >= 2
//   // prevVal: start at 1 as first two values fixed [0, 1]
//   // sum: current value in fib sequence, start at 1 as first two values fixed [0, 1]

//   // base case to ensure exit
//   if (n === counter) return sum

//   counter++
//   // ensure return of next execution!
//   // sum becomes new prevVal, and new sum is generated
//   return fib(n, counter, sum, prevVal + sum)
// }

// attempt 4
// algocast iterative solution
// function fib(n) {
//   const result = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1]
//     const b = result[i - 2]
//     result.push(a + b)
//   }
//   return result[n]
// }

// attempt 5
// algocast recursive solution
// even simpler than mine
// function fib(n) {
//   if (n < 2) return n

//   return fib(n - 1) + fib(n - 2)
// }

// attempt 6
// algocast memoization solution
function slowFib(n) {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}
function memoize(fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) return cache[args]

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}
const fib = memoize(slowFib)

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// fib(1) // 1
// fib(2) // 1
// fib(3) // 2
// fib(4) // 3

export default fib
