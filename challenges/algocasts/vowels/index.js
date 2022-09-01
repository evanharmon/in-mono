// https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/vowels
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
// function vowels(str) {}

// attempt 1
// lookup object strategy
// GOTCHA forgot to lowercase before testing
// function vowels(str) {
//   // create lookup object for vowels
//   const vowels = { a: true, e: true, i: true, o: true, u: true }
//   // track count of vowels
//   let cnt = 0
//   // iterate over string and increment on vowel match
//   for (const char of Array.from(str)) {
//     if (vowels[char.toLowerCase()] === true) {
//       cnt = cnt + 1
//     }
//   }

//   return cnt
// }

// attempt 2
// lookup object strategy oneliner
// function vowels(str) {
//   const vowels = { a: true, e: true, i: true, o: true, u: true }
//   return Array.from(str).filter(c => vowels[c.toLowerCase()] === true).length
// }

// attempt 3
// regex test with filter
// function vowels(str) {
//   // don't do global as the .test() will return a count instead of a number
//   const regex = new RegExp('[aeiou]')
//   return Array.from(str).filter(c => regex.test(c.toLowerCase())).length
// }

// attempt 4
// straight up regex test count
// const vowels = str => {
//   const m = str.match(/[aeiou]/gi)
//   return m === null ? 0 : m.length
// }

// attempt 5
// algocast string `includes()` helper iteration
// function vowels(str) {
//   let cnt = 0
//   const checker = 'aeiou'
//   for (let c of Array.from(str)) {
//     if (checker.includes(c.toLowerCase())) cnt++
//   }
//   return cnt
// }

// attempt 6
// algocast array `includes()` helper iteration
function vowels(str) {
  let cnt = 0
  const checker = ['a', 'e', 'i', 'o', 'u']
  for (const c of Array.from(str)) {
    if (checker.includes(c.toLowerCase())) cnt++
  }
  return cnt
}
// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// vowels('aeiou')

export default vowels
