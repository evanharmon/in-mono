# PYTON HEAPQ

## Features
built-in module to work with min heaps
- `heapify` converts list to min heap
- `heappop` removes and returns smallest element
- `heappush` adds value to heap maintaining heap property
- `nsmallest()` returns n smallest elements and supports an iterable
- access min element directly with `heap[0]`

## Limitations
- mainly used for min but can be used for max with negative values (example below)

## Examples

### MinHeap
```python
import heapq

# Create an empty heap
min_heap = []

# Insert elements into the heap
heapq.heappush(min_heap, 10)
heapq.heappush(min_heap, 4)
heapq.heappush(min_heap, 15)
heapq.heappush(min_heap, 7)
heapq.heappush(min_heap, 1)

print("Heap after insertions:", min_heap)  # Heap structure is maintained

# Get the smallest element without removing it
print("Current Min:", min_heap[0])

# Extract the smallest element
min_value = heapq.heappop(min_heap)
print("Extracted Min:", min_value)
print("Heap after extraction:", min_heap)

# Convert an existing list into a heap (heapify)
nums = [20, 5, 3, 17, 10]
heapq.heapify(nums)  # Transforms the list into a MinHeap in-place
print("Heapified list:", nums)

# Extract elements in sorted order
sorted_values = [heapq.heappop(nums) for _ in range(len(nums))]
print("Sorted values:", sorted_values)
```

### MaxHeap
use negative values as a workaround?

```python
import heapq

# Create an empty heap (simulating a MaxHeap)
max_heap = []

# Insert elements into the heap (store negative values)
heapq.heappush(max_heap, -10)
heapq.heappush(max_heap, -4)
heapq.heappush(max_heap, -15)
heapq.heappush(max_heap, -7)
heapq.heappush(max_heap, -20)

# Print heap (negate values to display correctly)
print("Heap after insertions:", [-x for x in max_heap])

# Get the maximum element without removing it
print("Current Max:", -max_heap[0])

# Extract the maximum element (convert back to positive)
max_value = -heapq.heappop(max_heap)
print("Extracted Max:", max_value)
print("Heap after extraction:", [-x for x in max_heap])

# Convert an existing list into a MaxHeap
nums = [20, 5, 3, 17, 10]
max_heap_nums = [-num for num in nums]  # Negate values
heapq.heapify(max_heap_nums)  # Heapify the negated list
print("Heapified list:", [-x for x in max_heap_nums])

# Extract elements in sorted (descending) order
sorted_values = [-heapq.heappop(max_heap_nums) for _ in range(len(max_heap_nums))]
print("Sorted values:", sorted_values)
```