# PYTHON LIST ITERATING TECHNIQUES

## Iterate from middle then outward
- Middle element will be first in list
- alternates adding elements from inner / out from middle

```python
def alternate_elements(arr=[1, 2, 3, 4, 5, 6]):
    result = []
    mid = len(arr) // 2
    # Keep track of left and right pointers to iterate outward
    if len(arr) % 2 == 1:
        l = mid - 1
        r = mid + 1
        # Add mid to beginning of list if midpoint is odd length
        result.append(arr[mid])
    else:
        # even number of items, use midpoint as right pointer so mid is added later
        l = mid - 1
        r = mid
    # Use while loop and stop when left is >= 0 and right is less then length of arr
    while l >= 0 and r < len(arr):
        result.append(arr[l])
        result.append(arr[r])
        # decrement left pointer to move left
        l -= 1
        # increment right pointer to move right
        r += 1
    return result
```