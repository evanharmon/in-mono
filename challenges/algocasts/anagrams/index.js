// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/anagrams
// do both strings contain the same non-whitespace characters and count of each character
// ignore punctuation and spaces
// function anagrams(strA, strB) {}

// attempt 1
// hashmap strategy
// function anagrams(strA, strB) {
//   // clean both strings of whitespace and punctuation
//   const cleanedStrA = strA.toLowerCase().replace(/\W/g, '')
//   const cleanedStrB = strB.toLowerCase().replace(/\W/g, '')
//   // build up hashmap of each string
//   // reminder map.get('c') brings back the VALUE for the key in the map
//   const mapStrA = new Map()
//   for (const c of Array.from(cleanedStrA))
//     mapStrA.set(c, mapStrA.get(c) + 1 || 1)

//   const mapStrB = new Map()
//   for (const c of Array.from(cleanedStrB))
//     mapStrB.set(c, mapStrB.get(c) + 1 || 1)
//   // exit early and return false if hashmaps are of different size

//   if (mapStrA.size !== mapStrB.size) return false

//   // go through first string hashmap
//   for (const m of mapStrA.entries()) {
//     // ex m: ['a', '6']
//     // get string b item
//     const mapBCharCnt = mapStrB.get(m[0])
//     // compare char and char count to string b hashmap
//     if (mapBCharCnt && mapBCharCnt === m[1]) continue
//     // return false if char doesn't exist in string b hashmap or not the same count
//     else return false
//   }

//   // finally, return true
//   return true
// }

// attempt 2
// Character map but with helper functions:
// - sanitizing
// - map building
// function anagrams(strA, strB) {
//   // helper: sanitize string
//   const sanitizer = str => str.replace(/[\W]/g, '').toLowerCase()
//   // helper: build character map from string
//   const builder = str => {
//     const m = new Map()
//     for (const c of Array.from(str)) m.set(c, m.get(c) + 1 || 1)
//     return m
//   }

//   // sanitize and build maps
//   const charMapA = builder(sanitizer(strA))
//   const charMapB = builder(sanitizer(strB))

//   // exit early if the maps are different lengths
//   // means have different character sets
//   if (charMapA.size !== charMapB.size) return false

//   // compare character maps
//   for (const [charA, charACnt] of charMapA.entries()) {
//     // get charMapB equivalent for comparison
//     // reminder .get() returns the value for the key
//     const charBCnt = charMapB.get(charA)
//     // return true as soon as map B is missing character or has diff char count
//     if (charBCnt === null || charBCnt !== charACnt) return false
//   }

//   return true
// }

// attempt 3
// // Character map with helper functions and less iterations
// function anagrams(strA, strB) {
//   // helper to build character map
//   // and sanitize in place
//   const buildCharMap = str => {
//     const m = new Map()
//     for (const c of Array.from(str)) {
//       const alphaNumericChar = c.match(/\w/)
//       if (alphaNumericChar) {
//         const sanitizedChar = alphaNumericChar[0].toLowerCase()
//         // valid character, let's add it to the map
//         m.set(sanitizedChar, m.get(sanitizedChar) + 1 || 1)
//       }
//     }

//     return m
//   }
//   const mapA = buildCharMap(strA)
//   const mapB = buildCharMap(strB)

//   // exit early if char sets differ
//   if (mapA.size !== mapB.size) return false

//   // compare character maps
//   for (const [keyA, cntA] of mapA.entries()) {
//     // get char map b equivalents
//     // reminder m.get() returns VALUE for key
//     const cntB = mapB.get(keyA)
//     if (!cntB || cntA !== cntB) return false
//   }

//   return true
// }

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// anagrams('hello', 'llohe')
// anagrams('Whoa! Hi!', 'Hi! Whoa!')

export default anagrams
