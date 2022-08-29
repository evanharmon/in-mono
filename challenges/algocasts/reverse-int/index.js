// https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/reverseint/index.js
// function reverseInt(n) {}

// attempt 1
// simple convert to string, reverse, parse back to int
// function reverseInt(n) {
//   // convert to string
//   let str = n.toString()

//   // handle negative numbers
//   let isNegative = false
//   if (str.startsWith('-')) {
//     // keep track of negative and pop off character before string manipulation
//     isNegative = true
//     str = str.slice(1)
//   }

//   const revString = Array.from(str).reverse().join('')

//   const revInt = parseInt(isNegative ? `-${revString}` : revString)

//   return revInt
// }

// attempt 2
// convert to string but use .sign() helper
function reverseInt(n) {
  // do not mutate

  // use sign helper to handle negatives
  const sign = Math.sign(n)

  // convert to string and reverse
  const revStr = n.toString().split('').reverse().join('')

  return sign * parseInt(revStr)
}
// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// console.log(reverseInt(1234))
reverseInt(1234)

export default reverseInt
