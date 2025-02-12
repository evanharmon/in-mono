# PYTHON QUICKSELECT

## Examples

### Find k-th smallest element
find k-th largest element by swapping parition check to `if arr[j] > pivot:`

```python
def quickselect(arr, low, high, k):
    """
    Find the k-th smallest element in arr[low..high] using the QuickSelect algorithm.
    
    :param arr: List of elements
    :param low: Starting index of the array segment to consider
    :param high: Ending index of the array segment to consider
    :param k: The order statistic (1-based) to find
    :return: The k-th smallest element in the array
    """
    if low == high:
        return arr[low]

    pivot_index = partition(arr, low, high)

    # Adjust k for 0-based indexing
    if k == pivot_index:
        return arr[k]
    elif k < pivot_index:
        return quickselect(arr, low, pivot_index - 1, k)
    else:
        return quickselect(arr, pivot_index + 1, high, k)


def partition(arr, low, high):
    """
    Partition the array segment around a pivot.
    
    :param arr: List of elements
    :param low: Starting index for partitioning
    :param high: Ending index for partitioning
    :return: The final position of the pivot element
    """
    pivot = arr[high]
    i = low

    for j in range(low, high):
        # or for largest, do arr[j] > pivot:
        if arr[j] <= pivot:
            # Swap elements to ensure that elements less than or equal to pivot are on its left
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    
    # Place the pivot element at its correct position
    arr[i], arr[high] = arr[high], arr[i]

    return i

# Example usage:
arr = [3, 2, 1, 5, 4]
k = 2
# Find the (k-1)th smallest element for zero-based indexing
result = quickselect(arr, 0, len(arr) - 1, k - 1)
print(f"The {k}-th smallest element is: {result}")
```