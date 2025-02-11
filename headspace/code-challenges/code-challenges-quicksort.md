# CODE-CHALLENGES QUICKSORT

## Features
Useful for sorting arrays or lists of elements
- in-place sorting, so doesn't require extra memory
- divide and conquer algorithm
- fast and efficient so it's a favorite

## Time complexity
average / best casej: O(n log n) so suitable for large datasets
worst: O(n^2)

worst case is often the result of splitting the array in to lopsides parts

## Space complexity
recursion:
average case: O(log n)
based on it's recursive nature and requiring more space on the call stack

without recursion:
O(1)

## Implementation

### Simple one with sorting
1. Choose a pivot element
Select an arbitrary element from the array, called the pivot.
This will be used to partition the array. Midpoint is a good one for here.

2. Partition the array
Partition the array into two subarrays:
  low: All elements less than the pivot (elements in the "low" part).
  high: All elements greater than the pivot (elements in the "high" part).

The pivot element is placed at the correct position in one of the subarrays.

3. Recursively sort the subarrays
Recursively apply the Quicksort algorithm to:
  low (subarray with elements less than the pivot)
  middle (subarray with elements equal to pivot)
  high (subarray with elements greater than the pivot)

4. Combine the sorted subarrays
Combine the two sorted subarrays (low and high) into a single, sorted array.

### In-place

1. Choose a pivot
often the last element

2. Partition the array
often a separate function. Iterate through array:
- Move elements smaller than pivot to LEFT
- Move elements greater than pivot to RIGHT
- Lastly, place pivot in correct sorted position

3. Recursively sort subarrays
apply same process to left and right partitions until array is fully sorted

