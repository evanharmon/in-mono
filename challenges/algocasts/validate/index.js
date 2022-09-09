// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/validate
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//           10
//     0             12
// -1      4     11        20
//   15                 17    99

// attempt 1
// stopped and looked up solution, I was so close
// function validate(node, min = null, max = null) {
//   // tracking variables
//   // max, min
//   // all values left of root must be less than root value

//   // base case
//   if (max && node.data > max) return false
//   else if (min && node.data < min) return false

//   if (node.left && node.right)
//     return (
//       validate(node.left, min, node.data) &&
//       validate(node.right, node.data, max)
//     )
// }

// attempt 2
// algocast solution
// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) return false
//   if (min !== null && node.data < min) return false

//   if (node.left && !validate(node.left, min, node.data)) return false
//   if (node.right && !validate(node.left, node.data, max)) return false

//   return true
// }

// attempt 3
// rewrite algocast solution for practice
// function validate(node, min = null, max = null) {
//   // track min and max, with null as defaults

//   // base cases
//   // when max exists, return false if current node GREATER than max
//   // when min exists, return false if current node LESS than min
//   if (max !== null && node.data > max) return false
//   if (min !== null && node.data < min) return false

//   // recursion happens INSIDE if check
//   // recurse on left nodes, return early if node ever greater than max
//   if (node.left && !validate(node.left, min, node.data)) return false
//   // resurse on right notes, return early if node ever LESS than min
//   if (node.right && !validate(node.right, node.data, max)) return false

//   // fallback of returning true
//   // write conditionals to return false for invalid BST
//   return true
// }

// attempt 4
// rewrite algocast solution again with notes, drive it home
function validate(node, min = null, max = null) {
  // track min and max, default to null
  // used to drive comparisons

  // base cases, check and return false when invalid
  // max used to check left node data
  // min used to check right node data
  if (max !== null && node.data > max) return false
  if (min !== null && node.data < min) return false

  // trigger recursions in if checks
  // left nodes need to return false when greater than max
  // right nodes need to return false when less than min
  if (node.left && !validate(node.left, min, node.data)) return false
  if (node.right && !validate(node.right, node.data, max)) return false

  // all conditionals based on validate returning true
  return true
}

export default validate
