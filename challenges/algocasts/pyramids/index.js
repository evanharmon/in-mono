// https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/pyramid
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// function pyramid(n) {}

// attempt 1
// my iterative solution pseudo code in detail
// Abandoned to go back to working on paper to come up with a solution for
// function pyramid(n) {
//   // still a row / column scenario
//   // - build up a string for console printing
//   // - iterate thru rows
//   // - iterate thru columns ** how long should columns be??
//   // - build up string correctly based on `n`
//   // - like a tree, it's all about the center trunk, reminds me of a mid-point
//   //
//   // EXAMPLE OUTPUT
//   // - ex: n = 1, row[0] = '#', length 1
//   // - ex: n = 2, row[0] = ' # ', length 3
//   // - ex: n = 3, row[0] = '  #  ', length 5
//   // - ex: n = 3, row[1] = ' ### ', length 5
//   // - ex: n = 3, row[2] = '#####', length 5
//   //
//   // Q: how to know whether to print `#` or ` `?
//   // - But how to know if points to right or left of midpoint should be `#` or ` `?
//   // - has to do with Row
//   // n = 2, length 3, row[0], midpoint 3 / 2 = 1.5, floor = 1, ' # '
//   // n = 3, length 5, row[0], midpoint 5 / 2 = 2.5, floor = 2, '  #  '
//   // n = 3, length 5, row[1], midpoint 5 / 2 = 2.5, floor = 2, ' ### '
//   // n = 3, length 5, row[2], midpoint 5 / 2 = 2.5, floor = 2, '#####'
//   // NOPE n=3, ln=5, mid=2, row[1], 3x'#', 2x' ', 3 * 1 = 3 #, 5 - 3# = 2 ' '
//   // n=3, ln=5, mid=2, row[1], 3x'#', 2x' ', 1(row) * 2(mid) = 2 + 1 = 3
//   // n=3, ln=5, mid=2, row[2], 5x'#', 2(row) * 2(mid) = 4 + 1 = 5
//   //
//   // Q: how long should the string be per n?
//   // n = 1, 1 / 2 + 1 = 1.5, Math.floor(1.5) = 1
//   // n = 1, 1 * 2 - 1 = 1
//   // n = 2, 2 / 2 + 1 = 2.. so this is wrong
//   // n = 2, 2 * 2 - 1 = 3
//   // n = 3, 3 * 2 - 1 = 5
//   // ok must be n * 2 - 1

//   // BEGIN CODE

//   for (let row = 0; row < n; row++) {
//     // row[0] should be '  #  '
//     let colLength = n * 2 - 1
//     // midpoint tracking
//     const mid = Math.floor(colLength / 2)
//     // track max number of '#' that should exist
//     let maxChars = row * mid + 1
//     let level = ''
//     // ex: n=3, str ln should be 5
//     for (let col = 0; col < colLength; col++) {
//       // level += '.' // debugging
//       // level += col === mid ? '#' : '.' // testing mid
//       // decide by col distance + or - from maxChars mid?
//       // ex col = 0, row[0], '  #  ', absolute must come in to here
//       // ex col = 0, row[1], ' ### ', absolute must come in to here
//       //
//       // how about + for left of mid?
//       // - ex: n = 3, row[1] = ' ### ', length 5, col[1] should be '#'
//       // dist 5ln - 3maxC = 2 - 1 > 1col false so '#'
//       //
//       // attempt 1 NOPE - not respect midpoint
//       // level += colLength - maxChars - 1 > col ? ' ' : '#'
//       // output
//       //     ##
//       //   ####
//       //  #####
//       //
//       // attempt 2
//       // i suspect this is only working bc of the midpoint check
//       // if (col === mid) level += '#'
//       // else if (col < mid) {
//       //   // level += colLength - maxChars - col > 1 ? ' ' : '#'
//       // } else if (col > mid) {
//       // }
//       // thinking
//       // calculate distance of col from mid?
//       // 0 - 2 = -2, 3 - 2 = -1
//       // calculate # of chars of '#' to either side of mid?
//       // let maxChars = row * mid + 1 // ex 1 or n3,r[0] =
//       // abandoned here to go back to paper
//     }
//     console.log(level, level.length)
//   }
// }

// attempt 2
// my iterative loop solution
// attempted after figuring out a solution on paper
// function pyramid(n) {
//   // formula for getting length of column
//   // columnLength = n * 2 - 1
//   // ex: 3 * 2 = 6 - 1 = 5
//   const columnLength = n * 2 - 1
//   //
//   // formula for midpoint
//   // mid = Math.floor(columnLength / 2)
//   // ex: 5 / 2 = 2.5 = Math.floor(2.5) = 2
//   const mid = Math.floor(columnLength / 2)

//   // iterate over rows
//   for (let row = 0; row < n; row++) {
//     // declare a string to build up
//     let level = ''
//     for (let col = 0; col < columnLength; col++) {
//       // level += '*' // quick test
//       // formula to decide whether to append ` ` or `#`
//       // col < mid - row || col > mid + row ? ' ' : '#'
//       level += col < mid - row || col > mid + row ? ' ' : '#'
//     }
//     // log string AFTER all columns iterated thru
//     console.log(level, level.length)
//   }
// }

// attempt 3
// my recursion based on iterative solution
// function pyramid(
//   n,
//   row = 0,
//   level = '',
//   columnLength = n * 2 - 1,
//   mid = Math.floor((n * 2 - 1) / 2),
// ) {
//   // BEGIN: Bare minimum info
//   // [x] provide defaults
//   // - n: know max rows and when to stop
//   // - row: iterate over steps and print on each row
//   // - level: string for printing
//   // - column: level string length will act as column
//   // - columnLength: know number of columns in each row
//   // - mid: midpoint for column conditional string appending
//   // END: Bare minimum info
//   //
//   // BEGIN: constant variables
//   // won't change but need to be passed in for scope
//   // - n
//   // - columnLength: n * 2 - 1
//   // - mid: Math.floor(columnLength / 2)
//   // END: constant variables
//   //
//   // BASE CASE: to allow recursion exit
//   if (n === row) return
//   //
//   // ROW Recursion
//   // do not modify `n`
//   // [x] print full row `level` string before recursion
//   // [x] recursion call to move to next row with no `level` string
//   // [x] return on new row to reset column recursion
//   // we know column is at the end when the `level` string is as long as column length
//   if (level.length === columnLength) {
//     // time to reset rows and do tasks
//     console.log(level, level.length)
//     // recursive call for next row
//     pyramid(n, row + 1, '')
//     return // reset column iteration
//   }
//   //
//   // COLUMN Recursion
//   // fallthrough case, rely on above row recursion to reset column iteration
//   // append char logic based on distance from mid:
//   // reminder level string length acting as column
//   // [x] append char: level.length - 1 < mid - row || level.length - 1 > mid + row
//   // [x] recursive call to increment column
//   // fix: ok looks like col doesn't need to be passed in bc
//   // relying on length of level string and columnLength
//   level += level.length < mid - row || level.length > mid + row ? ' ' : '#'
//   pyramid(n, row, level)
// }

// attempt 4
// algocast iterative solution
// function pyramid(n) {
//   const columnLength = n * 2 - 1
//   const mid = Math.floor(columnLength / 2)
//   for (let row = 0; row < n; row++) {
//     let level = ''
//     for (let col = 0; col < columnLength; col++) {
//       level += mid - row <= col && mid + row >= col ? '#' : ' '
//     }

//     console.log(level, level.length)
//   }
// }

// attempt 5
// algocast recursive solution
function pyramid(n, row = 0, level = '') {
  if (row === n) return

  const columnLength = n * 2 - 1
  if (level.length === columnLength) {
    console.log(level, level.length)
    pyramid(n, row + 1)
    return
  }

  let add = ''
  const midPoint = Math.floor(columnLength / 2)
  if (midPoint - row <= level.length && midPoint + row >= level.length)
    add = '#'
  else add = ' '

  pyramid(n, row, (level += add))
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// pyramid(2)
// pyramid(3)
pyramid(4)

export default pyramid
