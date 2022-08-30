// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/chunk
// function chunk(n) {}

// attempt 1
// easy to read array build up
// function chunk(array, size) {
//   // ex n [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   // example output [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

//   // new array for returning
//   const newArr = []
//   // keep track of index of current subArray
//   let subArrayIdx = 0

//   // iterate over entire array
//   for (const item of array) {
//     // 1: if sub array doesn't exist, create and add item
//     // 2: if sub array is full, incremeent subArrayIdx, create new array and add item
//     // 3: otherwise add item to sub array as it exists and is not full
//     if (Array.isArray(newArr[subArrayIdx]) === false) {
//       newArr[subArrayIdx] = [item]
//     } else if (newArr[subArrayIdx].length === size) {
//       subArrayIdx = subArrayIdx + 1
//       newArr[subArrayIdx] = [item]
//     } else {
//       newArr[subArrayIdx].push(item)
//     }
//   }

//   return newArr
// }

// attempt 2
// easy to read matrix array build up
// more descriptive explanation
// function chunk(array, size) {
//   // what I need to do
//   // take the existing array of items and order them by groups of a certain size
//   // like a person with a clipboard, I need to keep track of the group number
//   // and how many people I am adding to each
//   const matrix = []
//   let idx = 0

//   // iterate over the array of people
//   for (const item of array) {
//     // 1: see if a group exists yet, if not, create one and add the person to it
//     // 2: if the group exists but is full, start a new group and update the group number counter
//     // 3: group exists and is not full, so just add the person to the current group number
//     if (Array.isArray(matrix[idx]) === false) {
//       matrix[idx] = [item]
//     } else if (matrix[idx].length === size) {
//       // this works bc length and size start at 1
//       idx++
//       matrix[idx] = [item]
//     } else {
//       matrix[idx].push(item)
//     }
//   }

//   return matrix
// }

// attempt 3
// iterate through size of new groups instead of every item
// function chunk(array, size) {
//   // instead of stopping at every person and adding them to a group,
//   // tag the first person starting the new group
//   // keep track of every person marked off for this new group
//   // when the group is full, push the marked people in to their own separate group

//   const newArray = []
//   let newGroupCnt = 0

//   for (let i = 0; i < array.length; i++) {
//     // check if the group is full and add to new array if so
//     if (newGroupCnt === size) {
//       const persons = array.slice([i - size], i)
//       newArray.push(persons) // works bc slice doesnt include last so no zero index worries
//       // OOPS, if the new group isnt reset the group will be one big one!
//       newGroupCnt = 0
//     }

//     // WOH what if its the end of the line and there are no more people?
//     // WOH off day huh? check length of entire array
//     if (i === array.length - 1) newArray.push(array.slice([i - newGroupCnt]))

//     // group is not full, so update group count and move on
//     newGroupCnt++
//   }

//   return newArray
// }

// attempt 4
// write the above again but with easier to understand variables
// function chunk(array, size) {
//   const newArray = []
//   let groupCnt = 0

//   for (let i = 0; i < array.length; i++) {
//     // add new group when full
//     if (groupCnt === size) {
//       // calculate starting point of new group
//       const slicestart = i - size
//       // push out persons in to new group
//       const slice = array.slice(slicestart, i)
//       // add to new array
//       newArray.push(slice)
//       // remember to reset groupcnt
//       groupCnt = 0
//     }

//     // handle case of end of array
//     if (i === array.length - 1) {
//       const slicestart = i - groupCnt
//       const slice = array.slice(slicestart)
//       newArray.push(slice)
//     }

//     // only adding to new array when group is full, so just increment person count
//     groupCnt++
//   }

//   return newArray
// }

// attempt 5
// solution #1 from algos using last chunk focus
// focuses more on tracking new group array (chunk) where my solutions focused on the original array
// tracks the length of the `new group array` instead using a counter
// easier to read
// function chunk(array, size) {
//   // new array to return
//   const chunked = []

//   // iterate with for of
//   for (let element of array) {
//     // check last (end item) of chunked array
//     const last = chunked[chunked.length - 1]

//     // if chunked has no last item OR the last item in chunked is full up to size
//     if (!last || last.length === size) {
//       // add element as a new group to chunked
//       chunked.push([element])
//     } else {
//       // add to existing last item
//       last.push(element)
//     }
//   }

//   return chunked
// }

// attempt 6
// solution #2 algos using slice
// function chunk(array, size) {
//   // new chunked array
//   const chunked = []
//   // index at 0 for tracking
//   let idx = 0

//   while (idx < array.length) {
//     // slice(start, end) end not included
//     // remember second arg of slice is NOT a length, goes UP TO that array index
//     // push array slice of length size into chunked
//     chunked.push(array.slice(idx, idx + size))
//     // bump tracking index by size
//     idx = idx + size
//   }

//   return chunked
// }

// attempt 7
// solution #2 algos using slice
// first with while loop for practice, then in for loop for diff style
function chunk(array, size) {
  const chunked = []
  // // BEGIN: WHILE LOOP STYLE
  // // index size for iterations and adding chunks to chunked
  // let idx = 0

  // while (idx < array.length) {
  //   // grab entire slice of desired length off original array and add to chunked
  //   // remember last arg of slice needs to be 1 higher than last element needed
  //   // ex size 2, idx 0, slice(0, 3)
  //   // ex size 3, idx 3, slice(3, 6)
  //   // adding size to idx helps as size has built in +1 since not zero indexed
  //   chunked.push(array.slice(idx, idx + size))

  //   // index will be incremented by desired size
  //   idx = idx + size
  // } // END WHILE LOOP STYLE

  // FOR LOOP
  for (let i = 0; i < array.length; i = i + size) {
    // grab slice and add to chunked
    chunked.push(array.slice(i, i + size))
  }

  return chunked
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)

export default chunk
