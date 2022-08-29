// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/fizzbuzz
// function fizzBuzz(n) {}

// attempt 1
// recursion counting up
// function fizzBuzz(n) {
//   // exit early
//   if (n === 0) return

//   console.log(`calling fizzbuzz again with n`, n - 1)
//   fizzBuzz(n - 1)
//   // log AFTER call once stack is built up

//   if (n % 3 === 0 && n % 5 === 0) console.log(`fizzbuzz`)
//   else if (n % 3 === 0) console.log('fizz')
//   else if (n % 5 === 0) console.log('buzz')
//   else console.log(n)
// }

// attempt 2
// easier to read for loop
function fizzBuzz(n) {
  // remember to start at 1
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`fizzbuzz`)
    else if (i % 3 === 0) console.log('fizz')
    else if (i % 5 === 0) console.log('buzz')
    else console.log(i)
  }
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
fizzBuzz(15)

export default fizzBuzz
