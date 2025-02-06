# PYTHON RUNTIME COMPLEXITY EXAMPLES

## Steps to determine time complexity

1. Identify the loops
2. Analyze the loops
3. Combine the loops

## Complexities

### O(n^2)

```python
def nested_loop(n):
    result = 0  # O(1): This is a constant-time operation.
    
    for i in range(n):  # Outer loop runs n times, so it's O(n).
        for j in range(n):  # Inner loop also runs n times, making the total iterations O(n * n) or O(n^2).
            result += 1   # This is a constant-time operation inside the inner loop.
    
    return result  # O(1): Returning a value is a constant-time operation.
```