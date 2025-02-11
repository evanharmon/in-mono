# PYTHON DICTIONARY DEFAULTDICT

## Features
Create dictionaries with default values
- works well as a simple cache
- avoids KeyError exceptions

## Uses

### Simple

```python
from collections import defaultdict

dd = defaultdict(int)  # create a defaultdict with default value 0

print(dd['a'])  # prints 0, because 'a' didn't exist yet
```

### Example with cache-like behavior

```python
from collections import defaultdict

# Create a dictionary with default value 0 for missing keys
dd = defaultdict(int)
print(dd['a'])  # prints 0
print(dd['b'] + 1)  # prints 1, because 'b' didn't exist yet and was initialized to 0

# Create a dictionary with default value None for missing keys
dd = defaultdict(lambda: None)
print(dd['c'])  # prints None

# Implement cache-like behavior using defaultdict
def expensive_computation(x):
    return x * x

cache = defaultdict(expensive_computation)
print(cache[2])  # computes and returns 4 (because 2*2 is 4)
print(cache[3])  # returns the cached value, no computation needed
```