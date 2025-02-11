# PYTHON BINARY SEARCH

## Features
Similar to searching for a book in a library, where the books are sorted by title
- relies on sorted arrays
- uses divide-and-conquer approach

## Complexity

### Time comlexity
O(log n) since each comparison reduces elements to search by half

### Space complexity
O(1) since uses a fixed amount of space.

## Implementation
in the context of finding a book target title in a sorted library shelf by title
1. Divide shelf in half: left and right sections
2. Look at the middle book (midpoint)
3. If current title matches return the book. Otherwise look for book either left or right of midpoint based on title comparison alphabetically.
4. Repeat steps 1-3. Divide left or right section in to two smaller sections with a new midpoint.
5. Keep repeating until only one book remains to compare

## Example

```python
def binary_search(arr, target):
  # initialize pointers for start and end of entire array
  low = 0
  high = len(arr) - 1
  # iterate over section
  while low <= high:
    # calculate midpoint of current section for searching
    mid = (low + high) // 2
    guess = arr[mid]
    # Examine midpoint target
    if guess == target:
      return mid
    elif guess < target:
      # midpoint is before target - so look right
      # bump low to mid + 1
      low = mid + 1
    else:
      # arr[mid] > target
      # midpoint is after target - so look left
      # bump high to mid - 1
      high = mid - 1
  # target not found
  return None


# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
index = binary_search(arr, 5)

if index != None:  # Check if the target was found
    print(f"Target found at index {index}")
else:
    print("Target not found")
```

```python
def binary_search_recursive(arr, target, low=0, high=len(arr) - 1):
    if low > high:
        return -1  # not found
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, high)
    else:
        return binary_search(arr, target, low, mid-1)


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
print(binary_search_recursive(arr, target))  # Output: 4
```