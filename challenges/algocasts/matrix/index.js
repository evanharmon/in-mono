// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/matrix
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//      [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//    [[ 1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// function matrix(n) {}

// attempt 1
// [x] pen and paper - no code first
// iterating in a spiral fashion with while looping, switch modes and if statements
// function matrix(n) {
//   const matrix = Array.from(Array(n), () => new Array(n))
//   let counter = 0
//   const maxItems = n ** 2
//   let row = 0
//   let col = 0
//   let mode = 'right' // down, left, up

//   while (counter < maxItems) {
//     matrix[row][col] = counter + 1
//     switch (mode) {
//       case 'right':
//         if (col + 1 === n || typeof matrix[row][col + 1] !== 'undefined')
//           mode = 'down' && row++
//         else col++
//         break
//       case 'down':
//         if (row + 1 === n || typeof matrix[row + 1][col] !== 'undefined')
//           mode = 'left' && col--
//         else row++
//         break
//       case 'left':
//         if (col === 0 || typeof matrix[row][col - 1] !== 'undefined')
//           mode = 'up' && row--
//         else col--
//         break
//       case 'up':
//         if (row === 0 || typeof matrix[row - 1][col] !== 'undefined')
//           mode = 'right' && col++
//         else row--
//         break
//       default:
//         break
//     }
//     counter++
//   }
//   return matrix
// }

// attempt 2
// do first attempt again from memory
function matrix(n) {
  // pre-create matrix
  const matrix = Array.from(Array(n), () => new Array(n))
  // track counter, row, column
  let counter = 0
  let row = 0
  let col = 0
  // track mode of filling matrix
  // starts moving right, values are 'right','down','up','left'
  let mode = 'right'

  // while loop until all values up to max are filled
  // helper values for easier reading
  const maxCounter = n ** 2 // n ^ 2
  const start = 0
  const end = n - 1
  while (counter < maxCounter) {
    // always fill matrix
    matrix[row][col] = counter + 1 // zero based start

    // handle spiral directions via switch statement
    switch (mode) {
      case 'right':
        // when column end is reached or next column full, switch to 'down' and increment row
        // otherwise move right by incrementing column
        if (col === end || typeof matrix[row][col + 1] !== 'undefined') {
          mode = 'down'
          row++
        } else col++
        break
      case 'down':
        // when row end is reached or next row full, switch to 'left' and decrement column
        // otherwise move down by incrementing row
        if (row === end || typeof matrix[row + 1][col] !== 'undefined') {
          mode = 'left'
          col--
        } else row++
        break
      case 'left':
        // when column is at start of array or previous column full, switch to 'up' and decrement row
        // otherwise move left by decrementing column
        if (col === start || typeof matrix[row][col - 1] !== 'undefined') {
          mode = 'up'
          row--
        } else col--
        break
      case 'up':
        // when row is at start of array or previous row full, switch back to 'right' and increment column
        // otherwise move up by decrementing row
        if (row === start || typeof matrix[row - 1][col] !== 'undefined') {
          mode = 'right'
          col++
        } else row--
        break
      default:
        break
    }
    // ensure counter increments to avoid endless loop
    counter++
  }
  // ensure return
  return matrix
}

// attempt 3
// algocast solution 1 with for loops
// function matrix(n) {
//   const results = []
//   // build up empty sub arrays
//   for (let i = 0; i < n; i++) results.push([])

//   // tracking variables
//   let counter = 1
//   let startColumn = 0
//   let endColumn = n - 1
//   let startRow = 0
//   let endRow = n - 1

//   while (startColumn <= endColumn && startRow <= endRow) {
//     // top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter
//       counter++
//     }
//     startRow++

//     // right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter
//       counter++
//     }
//     endColumn--

//     // bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter
//       counter++
//     }
//     endRow--
//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter
//       counter++
//     }
//     startColumn++
//   }
//   return results
// }

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// matrix(2)
// matrix(3)
// matrix(4)

export default matrix
