# PYTHON TIME

## Resources

- [Python time module](https://docs.python.org/3/library/time.html)

## Use timestamp

```python
from time import time

def __init__(self, timestamp=None):
    self.timestamp = time() if timestamp is None else timestamp
```
