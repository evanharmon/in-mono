// based on https://www.rallycoding.com/problems/165
// practicing here as site isn't working correctly

// attempt 1
// psuedo code
// function longestCommonPrefix(array) {
//   // CASES
//   // - array can contain MORE than two strings
//   // - array items can be of different length

//   // example 1: ['antiquated', 'antilope']

//   // basic solution irrespective of performance
//   // - create `prefix` empty string for build up
//   // - iterate over each char in first string with index `i`
//   //  - iterate over rest of array of strings starting at idx `j` = 1
//   //    - if first[i] char does not equal array[j][i] char then return `prefix` early
//   //  - assume all matched, add char to `prefix` and continue
//   // - return `prefix` string
//   return ''
// }

// attempt 2
// coding poor basic solution
function longestCommonPrefix(array) {
  let prefix = ''
  for (let i = 0; i < array[0].length; i++) {
    // add to prefix if no break
    for (let j = 1; j < array.length; j++) {
      const char1 = array[0][i]
      const char2 = array[j][i]
      if (char1 !== char2) return prefix
    }
    prefix = prefix + array[0][i]
  }

  return prefix
}

// attempt 3
// re write psuedo code to reinforce incorrect use of break
// function longestCommonPrefix(array) {
//   // summary:
//   // take the first string in array,
//   // compare each of its chars against the same char index for the other strings
//   // steps:
//   // create `prefix` string for buildup and return
//   // iterate over every char in first string in array with index `i`
//   //  iterate over every other string in array with index `j` starting at 1
//   //    if first string char[i] does not match char of other string[j]
//   //      return `prefix` string early
//   //  add first string char[i] character to prefix since other strings matched at char index
//   // return `prefix` string
// }

// DEBUGGING
// longestCommonPrefix(['antiquated', 'antilope'])

export default longestCommonPrefix
