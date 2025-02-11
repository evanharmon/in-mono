# PYTHON MERGESORT

## Features
- uses divide and conquery strategy

## Limitations
- can use more memory than quicksort

## Examples

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr  # Base case: already sorted
    # Step 1: Split the array into two halves
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])  # Recursively sort left half
    right_half = merge_sort(arr[mid:])  # Recursively sort right half
    # Step 2: Merge the sorted halves
    return merge(left_half, right_half)


def merge(left, right):
    sorted_array = []
    i = j = 0
    # Compare elements from both halves and merge in sorted order
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1
    # Append any remaining elements
    sorted_array.extend(left[i:])
    sorted_array.extend(right[j:])
    return sorted_array


# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10]
print("Sorted Array:", merge_sort(arr))
```