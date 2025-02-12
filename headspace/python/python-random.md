# PYTHON RANDOM

## Create random strings
```python
import random
import string

random_strings = [random.choice(string.ascii_letters) for _ in range(20)]
```

## Create random alphanumerics
```python
import random
import string


random_alphanum = [random.choice(string.ascii_letters + string.digits) for _ in range(20)]
```

## Create random ints
```python
import random
import string


random_ints = [random.randint(1,10000) for _ in range(25)]
```