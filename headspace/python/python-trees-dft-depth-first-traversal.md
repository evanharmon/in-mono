# PYTHON TREES DEPTH FIRST TRAVERSAL

## Features
uses `list` for stacks

## Example

```python3
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

def dft_tree_traversal(root):
    if root is None:
        return

    _dft_tree_traversal_helper(root)

def _dft_tree_traversal_helper(node):
    print(node.value)  # Visit the node

    for child in node.children:
        _dft_tree_traversal_helper(child)

# Example usage
root = TreeNode(1)
root.children.append(TreeNode(2))
root.children.append(TreeNode(3))
root.children[0].children.append(TreeNode(4))
root.children[0].children.append(TreeNode(5))

dft_tree_traversal(root)  # Output: 1, 2, 4, 5, 3
```