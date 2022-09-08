import Node from './node.js'

// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/levelwidth
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// attempt 1
// my solution with `counters` array for width
// and traversal `arr` with EOL char `s`
// function levelWidth(root) {
//   const counters = [0]
//   const arr = [root, 's']
//   while (arr.length > 1) {
//     const elem = arr.shift()
//     if (elem === 's') {
//       // push EOL char back in and start new counter
//       arr.push(elem)
//       counters.push(0)
//     } else {
//       // add node children back to array and increment end counter
//       arr.push(...elem.children)
//       counters[counters.length - 1] = counters[counters.length - 1] + 1
//     }
//   }
//   return counters
// }

// attempt 2
// algocast solution
function levelWidth(root) {
  const arr = [root, 's']
  const counters = [0]
  while (arr.length > 1) {
    const node = arr.shift()
    if (node === 's') {
      counters.push(0)
      arr.push('s')
    } else {
      arr.push(...node.children)
      counters[counters.length - 1]++
    }
  }
  return counters
}

// debugging
const root = new Node(0)
root.add(1)
root.add(2)
root.add(3)
root.children[0].add(4)
root.children[2].add(5)
levelWidth(root) // [1, 3, 2]

export default levelWidth
