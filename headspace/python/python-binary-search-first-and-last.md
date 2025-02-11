# PYTHON BINARY SEARCH FIRST AND LAST POSITION

## Examples

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        
        if arr[mid] == target:
            left = mid
            right = mid
            
            # Search for the first occurrence of the target element
            while left > 0 and arr[left-1] == target:
                left -= 1
                
            # Search for the last occurrence of the target element
            while right < len(arr) - 1 and arr[right+1] == target:
                right += 1
                
            return [left, right]
        
        # If left half is sorted
        if arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
                
        # If right half is sorted
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
                
    return [-1, -1]  # Return [-1, -1] if not found


arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
target = 5
print(binary_search(arr, target)) # outputs [4,5]
```