# PYTHON CLASSES

## Resources

- [Python classes](https://docs.python.org/3/tutorial/classes.html)

## Features

- supports instance, class, or static attributes and methods

## Special methods

called by Python internally and can be overridden

`__init__(self)` - constructor
`__str__(self)` - output class as string
`__repr__(self)` - general print output of class
`__dict__` - snapshot of class variables as dictionary

## Instance variables / data members

referenced with `self` as in `self.data`

## Instanciation / Constructor

python automatically calls `__init__`

```python
def __init__(self):
    self.data = []
```

## Public variables

```python
def __init__(self):
    self.data = []
    self.left = None
    self.right = None
```

## Private variables

Only a convention - can still be modified
prefix with double underscore

```python
def __init__(self):
    self.__data = []
```

## Return a copy to prevent changes to class object

```python
class Blockchain:
    def __init__(self):
        self.__chain = []
    def get_chain(self):
        return self.__chain[:]
```
