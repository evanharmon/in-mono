# PYTHON QUEUES

## Features
first-in, first-out (FIFO) queues in python using `deque`
- uses doubly linked-list behind the scenes

## Data Types
- `list` type isn't the best as has O(n) time complexity for pop
- `deque` from `collections` module is better

## Use cases
- manage data based on arrival order
- keeping track of orders placed

## Time complexity
O(1) for queue / dequeue

## Space complexity
O(n) - it's gotta hold the list elements

## Operations
- `append` add to queue
- `popleft` to dequeue

## CoffeeShop example
```python
from collections import deque

class CoffeeShop:
    def __init__(self):
        self.queue = deque()

    def add_order(self, name):
        self.queue.append(name)

    def get_next_order(self):
        if len(self.queue) > 0:
            return self.queue.popleft()
        else:
            return None


shop = CoffeeShop()

for _ in range(5):  # Add 5 orders
    shop.add_order(f"Order {i+1}")

while True:
    order = shop.get_next_order()
    if order is not None:
        print(f"Serving: {order}")
    else:
        print("No more orders.")
        break
```