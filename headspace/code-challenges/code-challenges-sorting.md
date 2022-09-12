# CODE CHALLENGES SORTING

## Strategies

### Bubble sort

worst case `n^2` so one of the worst for large datasets

algocast solution:
first loop iteration goes through entire data set.
second goes array length - 1, etc.
So it's about moving the largest elements to end and then no longer including the end elements in comparisons

steps:

- for loop `i` across full array of items
  - inner for loop `j` across `array-i-1` length
    - if element at `j` GREATER than `j+1`
      - swap `j` and `j+1`
- return array

improvements:

- plain implementation runs through all loops even when sorting completed

### Selection sort

worst case `n^2` so one of the worst for large datasets

algocast calls it `prove me wrong` algorithm

steps:

- for loop `i` over entire array
  - assume element at `i` is least in array
  - assign `indexOfMin` to `i`
  - inner for loop `j` from `i + 1` to end of array
    - check if element has lower value
      - record element index
  - if index of current element and index of lowest element are not equal
    - swap them

### Merge sort

worst case is `n * log(n)`

usually uses a recursive solution with two separate functions

sort `function mergeSort(arr)` and merger `function merge(left, right)`

merger steps:
two sorted arrays `left` and `right`

- create empty `result` array
- while elements exist in both `left` and `right` arrays
  - if first element on left half LESS than first element on right half
    - `shift` left element into `result` array
  - else `shift` right element into `result` array
- take remaining items in array and put in `result`

mergeSort steps:
splits up array in to smallest possible left / right chunks
then recursively calls `merge` to join back together

- BASE CASE: check if array only has one value
  - return same array
- declare `center` for slicing `Math.floor(arr.length / 2)`
- declare `left` slice with `arr.slice(0, center)`
- declare `right` slice with `arr.slice(center)`
- recursive call `merge(mergeSort(left), mergeSort(right))`
