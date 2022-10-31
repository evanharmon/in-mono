# PYTHON PACKAGES

## Resources

- [Python packages docs](https://docs.python.org/3/tutorial/modules.html#packages)

## Features

- groups multiple python files in to single package namespace

## Limitations

- still needs a `pip` or `pipenv` local install step / adding to Pipfile

## Folder Structure

`__init__.py` file must exist but can be empty
turns folder in to a package

```
utility/
  __init__.py
  hash_util.py
  verification.py
```

## Import from package

```python
from utility.verification import Verification
from utility.hash_util import hash_block
```

## Check what exports are in a package

in REPL `python3`

```python
import utility.hash_util
dir(utility.hash_util)
```

## Hide from `import *`

note: can still be explicitly imported

```python
def _my_func():
  pass
```

## Set explicit exports

note: only works with `import *` syntax and still allows explicit import

```python
__all__ = ['hash_string_256', 'hash_block']
```
