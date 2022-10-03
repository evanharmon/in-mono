import MinHeap from './minheap.js'

function heapSort(arrays = [[]]) {
  // create new min heap
  const mh = new MinHeap()
  // add all arrays to min heap
  for (const arr of arrays) {
    for (const item of arr) mh.insert(item)
  }
  // create new array to return
  const result = []
  // delete from heap to trigger sorting
  // add to result
  while (mh.heap.length > 0) result.push(mh.delete())

  return result
}

// DEBUGGING
// const getArrays = () => [
//   [50, 43, 38, 22, 39, 27, 1, 3, 12],
//   [45, 12, 8, 7, 3],
//   [4, 10, 21, 11, 12, 18, 19],
// ]
// heapSort(getArrays())

export default heapSort
