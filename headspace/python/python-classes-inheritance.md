# PYTHON CLASSES INHERITANCE

## Syntax

inherit Vehicle class in Car class

```python
from vehicle import Vehicle

class Car(Vehicle):
    pass
```

## Inherit parent properties

have to call parent class constructor

```python
from vehicle import Vehicle

class Car(Vehicle):
    def __init__(self):
        super().__init__()
```

## Set Parent properties

call parent constructor with necessary arguments

```python
from vehicle import Vehicle

class Car(Vehicle):
    def __init__(self, top_speed=100):
        super().__init__(top_speed)
```
