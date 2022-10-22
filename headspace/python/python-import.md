# PYTHON IMPORT

## Resources

- [Python standard library](https://docs.python.org/3/library)

## Import entire package / module

```python
import random

random.shuffle(...)
```

## Import module and set alias

```python
import random as rn
```

## Import function from module

```python
from random import shuffle
```

## Import function from module with alias

```python
from random import shuffle as shuf
```

# Do not import in to global namespace

who knows what packages / modules have the same named functions

`from random import *` - BAD
