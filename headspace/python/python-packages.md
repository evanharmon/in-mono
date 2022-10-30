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
