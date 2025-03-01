# PYTHON TREES HEAPS

## Features
special type of tree where parent node is:
- less than or eq to child nodes (MIN)
- greater than or eq to child nodes (MAX)

## Operations
- insert: add new node to heap
- extract-min / extract-max: remove min or max value from heap
- heapify: rebuild heap by rearranging nodes

## Use cases


### Priority queue
highest-priority item is extracted first

### Sorting
efficienty sort data in ascending or descending order

### Top-K elements
find the top-k element. The K larger or smallest values from a dataset

## Examples
manual examples without builtin heapq, etc.

### MinHeap

```python
class MinHeap:
    def __init__(self):
        self.heap = []

    def _parent(self, index):
        return (index - 1) // 2

    def _left_child(self, index):
        return 2 * index + 1

    def _right_child(self, index):
        return 2 * index + 2

    def insert(self, value):
        """Inserts a value into the heap and maintains the heap property."""
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, index):
        """Moves the element at the given index up to maintain the heap property."""
        parent = self._parent(index)
        while index > 0 and self.heap[index] < self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            index = parent
            parent = self._parent(index)

    def extract_min(self):
        """Removes and returns the smallest element (root) from the heap."""
        if not self.heap:
            return None  # Heap is empty

        if len(self.heap) == 1:
            return self.heap.pop()

        min_value = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move the last element to root
        self._heapify_down(0)
        return min_value

    def _heapify_down(self, index):
        """Moves the element at the given index down to maintain the heap property."""
        smallest = index
        left = self._left_child(index)
        right = self._right_child(index)

        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right

        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self._heapify_down(smallest)

    def get_min(self):
        """Returns the smallest element without removing it."""
        return self.heap[0] if self.heap else None

    def size(self):
        """Returns the number of elements in the heap."""
        return len(self.heap)

    def is_empty(self):
        """Returns True if the heap is empty."""
        return len(self.heap) == 0

    def display(self):
        """Displays the heap as a list."""
        print(self.heap)


# Example Usage
heap = MinHeap()
heap.insert(10)
heap.insert(4)
heap.insert(15)
heap.insert(7)
heap.insert(1)

print("Heap after insertions:", heap.heap)
print("Extracted Min:", heap.extract_min())
print("Heap after extraction:", heap.heap)
print("Current Min:", heap.get_min())
```

### MaxHeap
```python
class MaxHeap:
    def __init__(self):
        self.heap = []

    def _parent(self, index):
        return (index - 1) // 2

    def _left_child(self, index):
        return 2 * index + 1

    def _right_child(self, index):
        return 2 * index + 2

    def insert(self, value):
        """Inserts a value into the heap and maintains the heap property."""
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, index):
        """Moves the element at the given index up to maintain the heap property."""
        parent = self._parent(index)
        while index > 0 and self.heap[index] > self.heap[parent]:  # Compare for max-heap
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            index = parent
            parent = self._parent(index)

    def extract_max(self):
        """Removes and returns the largest element (root) from the heap."""
        if not self.heap:
            return None  # Heap is empty

        if len(self.heap) == 1:
            return self.heap.pop()

        max_value = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move the last element to root
        self._heapify_down(0)
        return max_value

    def _heapify_down(self, index):
        """Moves the element at the given index down to maintain the heap property."""
        largest = index
        left = self._left_child(index)
        right = self._right_child(index)

        if left < len(self.heap) and self.heap[left] > self.heap[largest]:
            largest = left
        if right < len(self.heap) and self.heap[right] > self.heap[largest]:
            largest = right

        if largest != index:
            self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
            self._heapify_down(largest)

    def get_max(self):
        """Returns the largest element without removing it."""
        return self.heap[0] if self.heap else None

    def size(self):
        """Returns the number of elements in the heap."""
        return len(self.heap)

    def is_empty(self):
        """Returns True if the heap is empty."""
        return len(self.heap) == 0

    def display(self):
        """Displays the heap as a list."""
        print(self.heap)


# Example Usage
heap = MaxHeap()
heap.insert(10)
heap.insert(4)
heap.insert(15)
heap.insert(7)
heap.insert(20)

print("Heap after insertions:", heap.heap)
print("Extracted Max:", heap.extract_max())
print("Heap after extraction:", heap.heap)
print("Current Max:", heap.get_max())
```