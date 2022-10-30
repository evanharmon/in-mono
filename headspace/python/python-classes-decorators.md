# PYTHON CLASSES DECORATORS

## Features

- uses decorators
- great for helper functions

## Class method

call a class method without instanciating the class
`cls` is not the same object as `self`

```python
class Vehicle:
    self.__warnings = []
    @classmethod
    def get_warnings(cls):
        return cls.__warnings
```

## Static methods

can't access class variables
note does not receive `self` as an argument

```python
class Vehicle:
    self.__warnings = []
    @staticmethod
    def test_print(t):
        return print(t)
```
