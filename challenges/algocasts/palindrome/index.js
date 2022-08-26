// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/palindrome
// function palindrome(str) {}

// attempt 1: simple reverse and ternary
// function palindrome(str) {
//   // re-using reverseString attempts to focus on the palindrome logic checks
//   const revStr = Array.from(str).reduce((rev, char) => char + rev, '')

//   return str === revStr
// }

// attempt 2: compare without reversing string
// use `.every()` helper
function palindrome(s) {
  // .every() can break early when false is returned, otherwise returns true
  // track return value of true to mimic .every behavior
  let isPalindrome = true
  let lnZeroBased = s.length - 1
  // track midpoint to support early break to avoid unnecesary char comparisons
  // keep it zero based for easy iterator use
  let midPoint = Math.ceil(s.length / 2)

  Array.from(s).every((c, idx, arr) => {
    // avoid unnecessary comparisons
    if (idx > midPoint) return false

    // comparison char
    const compareChar = arr[lnZeroBased - idx]
    if (c === compareChar) {
      return true
    } else {
      isPalindrome = false
      return false
    }
  })

  return isPalindrome
}

// attempt 3: hashmap technique
// this approach is so tempting but abanding for now
// can't get all the tests / edge cases to pass
// function palindrome(str) {
//   // track length of string and midpoint
//   const sLn = str.length
//   // get midpoint character index, return null if no perfect mid
//   const midIdx = sLn % 2 !== 0 ? Math.ceil(sLn / 2) : null
//   // build up map from string
//   const hm = Array.from(str).reduce(
//     (m, c) => m.set(c, m.get(c) + 1 || 0),
//     new Map(),
//   )
//   console.log(`sLn`, sLn, `midIdx`, midIdx, `hmap size`, hm.size)

//   // compare map size to midpoint index
//   // if the the map size is greater then return false
//   // return hm.size > midIdx ? false : true

//   // trying to solve 'pennep' case

//   const testMid = sLn % 2
//   if (midIdx === null && testMid <= hm.size) {
//     return true
//   }

//   // if (midIdx !== null && hm.size >= midIdx) {
//   if (midIdx !== null && hm.size <= midIdx) {
//     return true
//   }

//   return false
// }

// debugging
// add debugger statement in function body
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// console.log(palindrome('aba'))
// palindrome('fish hsif')

export default palindrome
