# PYTHON RECURSION

## Examples

### Fibonacci

```python
def fibonacci(n):
    if n <= 0:
        return "Input should be a positive integer."
    elif n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

### Sum of an array without builtins
```python
def array_sum(array):
    if len(array) == 0:
        return 0
    else:
        return array[0] + array_sum(array[1:])
```