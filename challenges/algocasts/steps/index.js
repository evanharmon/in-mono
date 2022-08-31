// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/steps

// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// function steps(n) {}

// attempt 1
// simple for loop with string helpers
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     // add as many '#' as there are i
//     // pad logStr with as many spaces as remaining i
//     const logStr = '#'.repeat(i).padEnd(n, ' ')
//     console.log(logStr, 'logStr ln', logStr.length)
//   }
// }

// attempt 2
// algocast iterative solution
// iterate through rows
// ex: 3 x 3
// || # ||   ||   ||
// || # || # ||   ||
// || # || # || # ||
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stairStr = ''
//     for (let col = 0; col < n; col++) {
//       // ex c1, r1 gets a '#'
//       // add '#'
//       if (col <= row) stairStr += '#'
//       // ex c1, r0
//       // add ' '
//       else stairStr += ' '
//     }
//     // full row string built up and ready to print
//     console.log(stairStr, stairStr.length) // for debugging
//     // console.log(stairStr)
//   }
// }

// attempt 3
// algocast recursion solution
// function steps(n, row = 0, stair = '') {
//   // break when done
//   if (n === row) return

//   // end of row recursion
//   // print when stair str has been built up to length of n
//   if (n === stair.length) {
//     // console.log(stair, stair.length) // debugging
//     console.log(stair)
//     steps(n, row + 1)
//     return
//   }

//   // handle building up stair
//   stair += stair.length <= row ? '#' : ' '
//   // recurse through row
//   steps(n, row, stair)
// }

// attempt 4
// re-do attempt 3 with ONLY instructions for practice
// printing a step string ala rows / columns
// function steps(n, row = 0, stair = '') {
// Q: whats the bare minimum info we need?
// - what is the current row
// - what is the current string
// [ ] add in default parameters for tracking
//
// Q: action before or after recursion?
// - need to know max so BEFORE action
// - need to know n as max so DO NOT change in calls
//
// BASE CASE - when to exit
// - return when row has incremented to equal n steps
//
// ROW recursion
// - print out at this point since the row is full
// - recursive call with incremented row to move to next row
//
// COLUMN recursion
// - always know full max length of string with n
// - add appropriate char to stair based on row length and stair length
// - recursive call with string to continue building
// }

// attempt 5
// re-do attempt 4 instructions THEN code
// build a string staircase ala rows and columns
function steps(n, row = 0, stair = '') {
  // BEGIN: BARE MINIMUM INFO
  // - keep track of MAX to know length of staircase - so don't modify `n`
  // - track and increment addtl `row` param to keep `n` same
  // - track and append to `stair` string adding `#` or ` ` spaces
  // END: BARE MINIMUM INFO
  //
  // BEGIN: BASE CASE
  // since not modifying n, row is incrementing
  // rows are the full stairs, return when rows hits max `n`
  // END: BASE CASE
  if (n === row) return
  // BEGIN: ROW INCREMENTING / RECURSION
  // - row is complete when the stair string is full up to MAX `n`
  // - when row is complete, print the whole stair
  // - increment to next row and recursively call
  // - reset stair string for new row by relying on default stair param
  // - return after call to avoid continued building of stair string
  // END: ROW INCREMENTING / RECURSION
  if (n === stair.length) {
    console.log(stair, stair.length) // DEBUGGING
    // console.log(stair)
    steps(n, row + 1)
    return
  }
  // BEGIN: COLUMN (STRING) INCREMENTING / RECURSION
  // - text in column of stair string should be `#` up to row number
  // - recursive call with same row but string for continued appending
  // END: COLUMN (STRING) INCREMENTING / RECURSION
  stair += stair.length <= row ? '#' : ' '
  steps(n, row, stair)
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// steps(2)
// example console output
// '#  '
// '## '
steps(3)
// example console output
// '#   '
// '##  '
// '### '

export default steps
