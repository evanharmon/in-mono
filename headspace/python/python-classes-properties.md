# PYTHON CLASSES DECORATORS

## Features

- explicit getter and setters with decorators

## Limitations

- not always accessible like class attributes

## Getter and Setter

```python
class Vehicle:
    self.speed = 0
    @property
    def speed(self):
        return self.__speed
    @speed.setter
    def speed(self, val):
        self.__speed = val
```

## Immutable setter

😂

```python
class Vehicle:
    self.speed = 0
    @speed.setter
    def speed(self, _):
        pass
```
