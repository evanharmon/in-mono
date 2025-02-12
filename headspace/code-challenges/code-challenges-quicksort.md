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

### Lomuto-Quicksort optimization notes

```
In the partition_desc function, setting idx to low - 1 is a common optimization technique for the Lomuto-QuickSort algorithm.

When pivot (the high value) is chosen as the pivot, it's often beneficial to have the elements smaller than the pivot on one side of the partition, and the elements larger than the pivot on the other side. By setting idx to low - 1, we effectively start the iteration from the first element that can be swapped with the pivot (i.e., the one at index low).

This optimization has two benefits:

Fewer swaps: By starting the iteration from low - 1, we reduce the number of swaps needed to move elements around the pivot. This is because elements smaller than the pivot are already in their final position, and we only need to focus on moving larger elements to the right.

Faster partitioning: The partitioning process becomes more efficient since we don't need to iterate over all elements in the range [low, high). We can stop at idx + 1, which is where the pivot will end up after the final swap.

So, setting idx to low - 1 allows for a more efficient partitioning process and reduces the number of swaps needed during the quicksort algorithm.
```

```
Swapping the pivot with idx + 1 at the end of the partition_desc function is a crucial step in ensuring that the pivot element ends up in its final sorted position.

Here's what happens when we don't swap the pivot:

Initially, the pivot (high) is chosen as the largest element in the array. During the partitioning process, elements smaller than the pivot are moved to the left of the pivot, and elements larger than the pivot are moved to the right. When idx + 1 points to the position where the pivot should end up (i.e., the largest element), we would normally stop here.

However, if we don't swap the pivot with idx + 1, the pivot will still be at its original position (high), which means it's not yet in its final sorted position. The elements smaller than the pivot are now on one side of the pivot, but the pivot itself is still out of place.

By swapping the pivot with idx + 1, we effectively move the pivot to its correct position among the larger elements. This ensures that the array is partitioned correctly, and the quicksort algorithm can proceed with sorting the subarrays recursively.

In summary, swapping the pivot with idx + 1 at the end of the partition_desc function is necessary because it:

Moves the pivot to its final sorted position among the larger elements.
Ensures that the array is partitioned correctly, allowing the quicksort algorithm to proceed with sorting the subarrays recursively.
This swapping step is a critical part of the Lomuto-QuickSort algorithm and is essential for maintaining the correctness and efficiency of the sorting process.
```