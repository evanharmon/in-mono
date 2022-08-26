// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/reversestring
// function reverse(s) {}

// attempt 1: Array.from() style
// function reverse(s) {
//   return Array.from(s).reverse().join('')
// }

// attempt 2: using for of with unshift
// function reverse(s) {
//   // new array
//   const arr = []
//   for (const c of s) {
//     arr.unshift(c)
//   }

//   return arr.join('')
// }

// attempt 2: concatenate to new string with for of
// function reverse(s) {
//   let newStr = ''
//   for (const c of s) {
//     newStr = c + newStr
//   }

//   return newStr
// }

// attempt 3: variant of Array.from().reverse() without `from()`
// function reverse(s) {
//   return s.split('').reverse().join('')
// }

// attempt 4: without using iterator helpers
// function reverse(s) {
//   const sArr = s.split('')
//   const newArr = []

//   for (let i = 0; i < sArr.length; i++) {
//     newArr.unshift(sArr[i])
//   }

//   // remember to create new joined string from array
//   return newArr.join('')
// }

// attempt 5: without iterator helpers, go through generated string array backwards
// function reverse(s) {
//   const sArr = s.split('')
//   const retArr = []

//   for (let i = sArr.length - 1; i >= 0; i--) {
//     retArr.push(sArr[i])
//   }

//   return retArr.join('')
// }

// attempt 6: using reduce helper
function reverse(s) {
  // allow reduce helper to manage return string and iteration
  return s.split('').reduce((reverse, character) => character + reverse, '') // reverse initializes as empty string first iteration
}

// debugging
// add debugger statement in function body
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// reverse('  abcd')

export default reverse
