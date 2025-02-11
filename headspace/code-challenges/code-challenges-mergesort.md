# CODE-CHALLENGES MERGESORT

## Features
- uses divide-and-conquer strategy
- better than quicksort as it doesn't degrade to O(n^2) on poor partitioning

## Time complexity
all cases: O(n log n)

## Space complexity
O(n)
uses temp arrays while merging elements
not always great with limited memory - quicksort can be better here

## Implementation

1. Divide
Recursively split the input array into two halves until each sub-array contains only one element.

2. Conquer
Recursively apply the merge sort to each half.
Continue splitting each sub-array into smaller halves until you reach arrays with a single element or no elements, as these are inherently sorted.

3. Merge
Once you have split the array down to individual elements, begin merging them back together.
During the merge step, compare the elements of two sorted sub-arrays and combine them into a new sorted array.
Continue this process for all pairs of sub-arrays until you eventually recombine all sub-arrays back into one single sorted array.

4. Detailed Merge Process:

Maintain pointers to track positions in each of the two sub-arrays being merged.
Compare elements at these pointer locations and move the smaller element to the new combined array.
Move the pointer for the array from which you took the smaller element forward by one position.
If you reach the end of one sub-array while still having elements in the other, copy all remaining elements directly into the combined array.

5. Repeat:

Continue this merge process up the recursion tree until all levels are merged and you have a single sorted array as output.
