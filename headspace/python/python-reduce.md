# PYTHON REDUCE

## Resources

- [Python reduce docs](https://docs.python.org/3/library/functools.html#functools.reduce)
- [RealPython reduce function](https://realpython.com/python-reduce-function/)

## Roughly equivalent function

```python
def reduce(function, iterable, initializer=None):
    it = iter(iterable)
    if initializer is None:
        value = next(it)
    else:
        value = initializer
    for element in it:
        value = function(value, element)
    return value
```

## Use

```python
from functools import reduce
numbers = [0,1,2,3,4,5]
reduce(lambda a, b: a + b, numbers)
```
