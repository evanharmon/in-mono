# CODE-CHALLENGES QUICKSELECT

## Features
Used to efficiently find kth-smallest element in an unordered list
- focuses on finding single element instead of sorting entire array
- uses a partitioning process like quicksort with a pivot
- uses recursion to process only one part of array

## Use cases
- Median finding
- K-th smallest element

## Time complexity
average / best casej: O(n)
worst: O(n^2) - can be mitigated by using median-of-medians to choose better pivots

## Space complexity
it's in place so O(1)

without recursion:
O(1)

## Implementation

1. Choose a pivot like:
- first element
- last element
- random element (avoids worst-case complexity)

2. Partition
- rearrange elements in array so all elements less than the pivot that comes before it,
  and all elements greater than or equal to the pivot come after it
- ensures pivot is placed at it's correct sorted position

3. Determine position of pivot
after partitioning:
- if pivot index is `k`, `k-th` smallest element has been found
- if k less than pivot index, recursively apply QuickSelect to left sub-array
- if k greater than pivot index, recursively apply QuickSelect to right sub-array. K has to be adjusted for offset

4. Recursive call
- continue partitioning and recursing one side of array until the `k-th` smallest element found