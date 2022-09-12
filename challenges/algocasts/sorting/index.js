// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/sorting
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// attempt 1
// my attempt based on algocast suggestions
// function bubbleSort(arr) {
//   // iterate through entire array
//   for (let i = 0; i < arr.length; i++) {
//     // inner loop iteration to move items to end
//     // then reduce loop length by `i` to reduce items of comparison
//     // as items at end will be largest and sorted
//     for (let j = 1; j < arr.length - i; j++) {
//       // compare and swap elements sorted[i] and sorted[j]
//       const itemI = arr[i]
//       const itemJ = arr[j + i]
//       if (itemI > itemJ) {
//         // swap
//         arr[i] = itemJ
//         arr[j + i] = itemI
//       }
//     }
//   }
//   return arr
// }

// attempt 2
// algocast solution
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const lesser = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = lesser
//       }
//     }
//   }
//   return arr
// }

// attempt 3
// rewrite with algocast solution
// function bubbleSort(arr) {
//   // iterate over entire array
//   // basic for loop as index values are needed
//   for (let i = 0; i < arr.length; i++) {
//     // iterate through array
//     // swap elements greater than next
//     // logic looks at next item, so ensure length is - 1 at start
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       // compare side by side elements based on index j
//       if (arr[j] > arr[j + 1]) {
//         // swap lesser
//         const lesser = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = lesser
//       }
//     }
//   }
//   return arr
// }

// attempt 4
// rewrite again since confusing i and j
function bubbleSort(arr) {
  // iterate over entire array
  for (let i = 0; i < arr.length; i++) {
    // inner loop to compare side by side elements
    // according to `j` index
    // comparison will use j+1, so ensure length is -1 at start
    // inner loop should iterate - i as the lesser values are swapped and now sorted
    for (let j = 0; j < arr.length - i - 1; j++) {
      // compare side by side elements of j
      if (arr[j] > arr[j + 1]) {
        // need to swap lesser
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

// attempt 1
// my solution
// function selectionSort(arr) {
//   // example [100, -40, 500, -124, 0, 21, 7]
//   // iterate over entire array
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMin = i
//     // prove me wrong style
//     // assuming element at `arr[i]` is lowest
//     // inner foor loop will update `indexOfMin` if finds lower value
//     for (let j = i + 1; j < arr.length; j++) {
//       // compare indexOfMin element to j index
//       // update indexOfMin if j is less
//       if (arr[indexOfMin] > arr[j]) indexOfMin = j
//     }
//     debugger
//     // compare indexOfMin to current i index
//     // swap if not the same
//     if (i !== indexOfMin) {
//       const lesser = arr[indexOfMin]
//       arr[indexOfMin] = arr[i]
//       arr[i] = lesser
//     }
//   }
//   return arr
// }

// attempt 2
// algocast solution
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMin = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexOfMin]) indexOfMin = j
//     }
//     if (indexOfMin !== i) {
//       let lesser = arr[indexOfMin]
//       arr[indexOfMin] = arr[i]
//       arr[i] = lesser
//     }
//   }
//   return arr
// }

// attempt 3
// rewrite
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // indexOfMin will be tracker for lesser value
    let indexOfMin = i
    // iterate over `i+1` remaining items
    // trying to find if `j` value is less than assumed indexOfMin
    for (let j = i + 1; j < arr.length; j++) {
      // compare and update
      if (arr[j] < arr[indexOfMin]) indexOfMin = j
    }
    // swap indexOfMin if assumption was wrong
    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

// attempt 1
// jumping straight to algocast solution
function mergeSort(arr) {
  // base case
  if (arr.length === 1) return arr

  // divide up array in to two equal halves
  const center = Math.floor(arr.length / 2) // depends on using SLICE
  const left = arr.slice(0, center) // remember slice cuts UP TO NOT INCLUDING
  const right = arr.slice(center) // center up to end

  // recursively call mergeSort to sub-divide to smallest arrays
  return merge(mergeSort(left), mergeSort(right))
}

// attempt 1
// simpler iterative function so attempting my solution
// function merge(left, right) {
//   // create empty array for returning sorted array
//   const result = []
//   // no need to track index since removing from `left` and `right` arrays
//   // loop through while left and right BOTH have elements
//   // example: left [0, 10] right [-100, 5, 15]
//   while (left.length > 0 && right.length > 0) {
//     // compare first element in `left` and `right`
//     // shift lesser value out of array and in push to `result`
//     if (left[0] < right[0]) {
//       result.push(left.shift())
//     } else {
//       result.push(right.shift())
//     }
//   }
//   // take care of any elements remaining in `left` or `right` by adding to end of result
//   if (left.length > 0) result.push(...left)
//   if (right.length > 0) result.push(...right)
//   return result
// }

// attempt 2
// algocast solution
function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}

// debugging
// bubbleSort([100, -40, 500, -124, 0, 21, 7]) // sorted [-124, -40, 0, 7, 21, 100, 500]
// selectionSort([100, -40, 500, -124, 0, 21, 7]) // sorted [-124, -40, 0, 7, 21, 100, 500]
// merge([1, 10], [2, 8, 12]) // [1, 2, 8, 10, 12]

export default bubbleSort
export { bubbleSort, selectionSort, mergeSort, merge }
