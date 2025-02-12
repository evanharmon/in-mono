# PYTHON K ORDINAL STATISTIC

## Features
finds the `k`-th smallest element. So `k=1` would be smallest, `k=2` second smallest, etc.

## Examples

### Find in a list using `sorted` builtin
Functionality:

- function first sorts the list according to the desired statistic.
- for 'min', sorts in ascending order
- for 'max', sorts in descending order
- for 'median', handles both odd and even lengths of lists, returning either middle element or average of the two middle elements
- returns the K-th element based on the sorted list.

```python
def kth_statistic(lst, k, statistic):
    """
    Finds the K-th element based on a given statistical measure.

    Args:
        lst (list): The list of elements.
        k (int): The ordinal position for the statistic.
        statistic (str): The type of statistic to compute. 
                         Options are 'min', 'max', or 'median'.

    Returns:
        Any: The K-th element based on the specified statistical measure.

    Raises:
        ValueError: If `statistic` is not one of 'min', 'max', or 'median'.
                    If `k` is out of bounds for the list.
    """

    if statistic == 'min':
        sorted_lst = sorted(lst)
    elif statistic == 'max':
        sorted_lst = sorted(lst, reverse=True)
    elif statistic == 'median':
        # For median, sort and then pick middle element(s).
        n = len(sorted(lst))
        if n % 2 == 1:
            return sorted(lst)[n // 2]
        else:
            mid1, mid2 = n // 2 - 1, n // 2
            return (sorted(lst)[mid1] + sorted(lst)[mid2]) / 2
    else:
        raise ValueError("Statistic must be 'min', 'max', or 'median'.")

    # Ensure k is within the bounds of the list
    if not 0 <= k < len(sorted_lst):
        raise IndexError(f"Index {k} out of range for list of length {len(lst)}")

    return sorted_lst[k]

# Example usage:
lst = [3, 1, 4, 1, 5, 9, 2]
print(kth_statistic(lst, 0, 'min'))  # Output: 1 (minimum)
print(kth_statistic(lst, 2, 'max'))  # Output: 4 (third largest element in descending order)
```

### Using quicksort

```python
def quicksort(lst):
    """Sorts a list using the Quicksort algorithm."""
    if len(lst) <= 1:
        return lst
    pivot = lst[len(lst) // 2]
    left = [x for x in lst if x < pivot]
    middle = [x for x in lst if x == pivot]
    right = [x for x in lst if x > pivot]
    return quicksort(left) + middle + quicksort(right)


def kth_statistic(lst, k, statistic):
    """
    Finds the K-th element based on a given statistical measure using Quicksort.

    Args:
        lst (list): The list of elements.
        k (int): The ordinal position for the statistic.
        statistic (str): The type of statistic to compute. 
                         Options are 'min', 'max', or 'median'.

    Returns:
        Any: The K-th element based on the specified statistical measure.

    Raises:
        ValueError: If `statistic` is not one of 'min', 'max', or 'median'.
                    If `k` is out of bounds for the list.
    """

    if statistic == 'min':
        sorted_lst = quicksort(lst)
    elif statistic == 'max':
        sorted_lst = quicksort(lst)[::-1]
    elif statistic == 'median':
        # For median, sort and then pick middle element(s).
        n = len(quicksort(lst))
        if n % 2 == 1:
            return quicksort(lst)[n // 2]
        else:
            mid1, mid2 = n // 2 - 1, n // 2
            sorted_lst = quicksort(lst)
            return (sorted_lst[mid1] + sorted_lst[mid2]) / 2
    else:
        raise ValueError("Statistic must be 'min', 'max', or 'median'.")

    # Ensure k is within the bounds of the list
    if not 0 <= k < len(sorted_lst):
        raise IndexError(f"Index {k} out of range for list of length {len(lst)}")

    return sorted_lst[k]


# Example usage:
lst = [3, 1, 4, 1, 5, 9, 2]
print(kth_statistic(lst, 0, 'min'))  # Output: 1 (minimum)
print(kth_statistic(lst, 2, 'max'))  # Output: 4 (third largest element in descending order)
```