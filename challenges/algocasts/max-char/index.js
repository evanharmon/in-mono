// https://github.com/StephenGrider/AlgoCasts/blob/master/exercises/maxchar/index.js
// function maxChar(str) {}

// attempt 1
// using hash map
function maxChar(str) {
  // build map from str
  // keep track of count of chars in map
  const m = new Map()
  Array.from(str).forEach(c => m.set(c, m.get(c) + 1 || 1))

  // keep track of the maxChar for return value
  let maxChar = ''
  // use iterator helper to go thru map and check count of each char
  Array.from(m).reduce((acc, curr) => {
    // compare accumulating count to current map chars count
    // ex curr: ['a', 5]
    if (curr[1] > acc) {
      // set new maxChar and return updated accumulator count
      maxChar = curr[0]
      return curr[1]
    } else {
      // return existing accumulated max count
      return acc
    }
  }, 0)

  return maxChar
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// maxChar('abcdefghijklmnaaaaa')

export default maxChar
