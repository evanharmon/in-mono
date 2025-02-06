# PYTHON TIME

## Resources

- [Python time module](https://docs.python.org/3/library/time.html)

## Use timestamp

```python
from time import time

def __init__(self, timestamp=None):
    self.timestamp = time() if timestamp is None else timestamp
```

## Check how long an iteration takes to complete
```python
import time

start_time = time.time()  # Get the current time before the loop starts

# Your for loop here
for i in range(10**6):
    pass

end_time = time.time()  # Get the current time after the loop ends
execution_time = end_time - start_time  # Calculate the total execution time
print("The loop took", execution_time, "seconds to execute.")
```