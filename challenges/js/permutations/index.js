// [adapted from](https://javascript.plainenglish.io/how-to-solve-permutations-in-javascript-502cc4522482)

// plainenglish solution
// function permute(nums) {
//   const results = []
//   const backtrack = (nums, temp) => {
//     for (const num of nums) {
//       // add valid permutations to results array
//       if (temp.length === nums.length) {
//         results.push(temp.slice())
//         return
//       }

//       // check dead-end condition where temp includes current element
//       if (!temp.includes(num)) {
//         temp.push(num)
//         backtrack(nums, temp)
//         temp.pop()
//       }
//     }
//   }
//   backtrack(nums, [])

//   return results
// }

// attempt 2
// re-write with notes for practice
function permute(nums) {
  // new return array of permutations
  const results = []

  // backtracking
  // use recursion to incrementally build up solution
  const backtrack = (nums, temp) => {
    // baseline
    // return when finished with permutations for each num
    if (temp.length === nums.length) {
      // example: nums [1,2,3] and temp [3,1,2]
      results.push([...temp])
      return
    }

    // loop through each num
    for (const num of nums) {
      // dead-end condition
      // ignore num of nums if temp array already includes it
      if (!temp.includes(num)) {
        // preorder: push num to temp
        temp.push(num)
        // backtrack to find all permutations
        backtrack(nums, temp)
        // postorder: pop to clear num and move on to next num
        temp.pop(num)
      }
    }
  }
  backtrack(nums, [])

  return results
}
// DEBUGGING
// permute([1, 2, 3])

export default permute
