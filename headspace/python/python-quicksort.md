# PYTHON QUICKSORT

## Features
Useful for sorting arrays or lists of elements
- in-place sorting, so doesn't require extra memory
- divide and conquer algorithm
- fast and efficient so it's a favorite

## Examples

### In-place using partitioning

```python
# Define the partition function that will be used to partition the array around a pivot element
def partition(arr, low, high):
    # Set the pivot element as the last element in the array
    pivot = arr[high]
    # Initialize the index of smaller element as (index of first element - 1)
    i = low - 1
    # Iterate over each element in the array from the start to the second-to-last element
    for j in range(low, high):
        # If the current element is less than the pivot element
        if arr[j] < pivot:
            # Increment the index of smaller element and swap it with the current element
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    # Swap the pivot element with the element at (index of smaller element + 1)
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    # Return the index of the pivot element
    return i + 1


# Define the quicksort function that will be used to sort the array using the partition function
def quicksort_inplace(arr, low, high):
    # If the start index is less than the end index
    if low < high:
        # Partition the array around a pivot element and get the index of the pivot element
        pivot_index = partition(arr, low, high)
        # Recursively sort the left subarray using the quicksort function
        quicksort_inplace(arr, low, pivot_index - 1)
        # Recursively sort the right subarray using the quicksort function
        quicksort_inplace(arr, pivot_index + 1, high)


# Example Usage
arr = [3, 6, 8, 10, 1, 2, 1]
quicksort_inplace(arr, 0, len(arr) - 1)
print(arr)
```

### Using list comprehension

Ascending:
```python
import random


def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quicksort(left) + middle + quicksort(right)


# Sample data
data = [3, 6, 8, 10, 1, 2, 1]
# larger data example
# data = [random.randint(1, 10000) for _ in range(10000)]

# Call the quicksort function and print the result
print("Sorted array:", quicksort(data))
```

Descending:
```python
import random

def quicksort_desc(arr):
    if len(arr) <= 1:
        return arr
    
    # Create pivot point
    pivot = arr[len(arr) // 2]
    # sort left, middle, and right sections
    left = [num for num in arr if num > pivot]
    middle = [num for num in arr if num == pivot]
    right = [num for num in arr if num < pivot]

    # return sections joined together, middle will be as is
    # still need recursion to finish sorting
    return quicksort_desc(left) + middle + quicksort_desc(right)


data = [random.randint(1, 100) for _ in range(25)]
print("Sorted array:", quicksort_desc(data))
```