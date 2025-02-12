# PYTHON COUNT NUMBER OF INVERSIONS

## Explanation

In a sorted array, an inversion occurs when two elements from different parts of the array are swapped.
For example, if we have the array [2, 4, 1, 3, 5], there are two inversions:

Between elements 1 and 2: 1 is smaller than 2, but it should be on the right side.
Between elements 3 and 4: 3 is smaller than 4, but it should be on the right side.
The goal of this problem is to count the number of inversions in a given array.

## Examples

### using mergesort

```python
def merge_and_count(arr, temp_arr, left, mid, right):
    i = left    # Starting index for left subarray
    j = mid + 1 # Starting index for right subarray
    k = left    # Starting index to be sorted
    inv_count = 0

    # Conditions are checked to ensure that i doesn't exceed mid and j doesn't exceed right
    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp_arr[k] = arr[i]
            i += 1
        else:
            # There are mid - i inversions, because all elements left to i in the left subarray
            # are greater than arr[j]
            temp_arr[k] = arr[j]
            inv_count += (mid-i + 1)
            j += 1
        k += 1

    # Copy the remaining elements of left subarray, if any
    while i <= mid:
        temp_arr[k] = arr[i]
        i += 1
        k += 1

    # Copy the remaining elements of right subarray, if any
    while j <= right:
        temp_arr[k] = arr[j]
        j += 1
        k += 1

    # Copy the sorted subarray into Original array
    for i in range(left, right + 1):
        arr[i] = temp_arr[i]

    return inv_count


def merge_sort_and_count(arr, temp_arr, left, right):
    inv_count = 0
    if left < right:
        mid = (left + right)//2

        # Count inversions in the left subarray
        inv_count += merge_sort_and_count(arr, temp_arr, left, mid)
        
        # Count inversions in the right subarray
        inv_count += merge_sort_and_count(arr, temp_arr, mid + 1, right)

        # Count split inversions and merge two sorted halves
        inv_count += merge_and_count(arr, temp_arr, left, mid, right)

    return inv_count


def count_inversions(arr):
    n = len(arr)
    temp_arr = [0]*n
    return merge_sort_and_count(arr, temp_arr, 0, n-1)


# Example usage:
arr = [2, 4, 1, 3, 5]
inversion_count = count_inversions(arr)
print(f"Number of inversions are {inversion_count}")
```
