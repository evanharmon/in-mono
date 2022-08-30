// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/capitalize
// function capitalize(str) {}

// attempt 1
// build up a string to return
// function capitalize(str) {
//   // build up a return str
//   let retStr = ''
//   // ex: 'make it titlecase'
//   // iterate through characters of string
//   const arrayFromStr = Array.from(str)
//   // for of won't give indexes we need
//   for (let i = 0; i < arrayFromStr.length; i++) {
//     // grab last char of retStr
//     const lastChar = retStr.charAt(retStr.length - 1)
//     if (lastChar === '' || lastChar === ' ')
//       retStr = retStr + arrayFromStr[i].toUpperCase()
//     else retStr = retStr + arrayFromStr[i]
//   }

//   return retStr
// }

// attempt 2
// algo solution #1 split string by spaces and iterate
// initial attempt
// function capitalize(str) {
//   const words = []

//   // split input str by spaces
//   // results in an array of words
//   const splitStrArr = str.split(' ')

//   for (const splitStr of splitStrArr) {
//     // uppercase first letter of word
//     const upperFirstChar = splitStr.charAt(0).toUpperCase()
//     // create new word out of upperFirstChar and rest of word
//     const upperCaseWord = upperFirstChar + splitStr.slice(1)
//     // add resulting word to return words array
//     words.push(upperCaseWord)
//   }

//   // lastly, join words with spaces and return
//   return words.join(' ')
// }

// attempt 3
// algo solution #1 split string by spaces and iterate
// improved version from video - easier to read
function capitalize(str) {
  const words = []

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(' ')
}

// attempt 4
// algos solution #2
// similar to my first build a new string
// admittedly even author isn't crazy about this solution
// function capitalize(str) {
//   // create return str
//   // handle first case by automatically uppercasing at creation
//   let result = str[0].toUpperCase()

//   // first iteration already handled in return string declaration
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') result += str[i].toUpperCase()
//     else result += str[i]
//   }

//   return result
// }

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// capitalize('i love breakfast at bill miller bbq')

export default capitalize
