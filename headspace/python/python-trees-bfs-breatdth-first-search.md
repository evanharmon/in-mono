# PYTHON TREES BREADTH FIRST SEARCH

## Features
- uses `deque` for queues

## Example

```python3
from collections import deque

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

def bfs_tree_traversal(root):
    if root is None:
        return

    queue = deque([root])
    visited = set()

    while queue:
        node = queue.popleft()
        print(node.value)  # Visit the node

        for child in node.children:
            if child not in visited:
                queue.append(child)
                visited.add(child)

# Example usage
root = TreeNode(1)
root.children.append(TreeNode(2))
root.children.append(TreeNode(3))
root.children[0].children.append(TreeNode(4))
root.children[0].children.append(TreeNode(5))

bfs_tree_traversal(root)  # Output: 1, 2, 3, 4, 5
```