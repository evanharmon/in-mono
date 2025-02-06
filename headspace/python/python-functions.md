# PYTHON FUNCTIONS

## Formatting / Linting

in Python, functions have TWO empty lines between them

## Functions missing `return` return `None`

returns `NONE`

```python
def add_two(num_one, num_two):
  result = num_one + num_two
```

## Default values for parameters

```python
def power_with_default(num_one, num_two=2):
  return num_one ** num_two
def default_list(arr=[1,2,3]):
  print(arr)
```

## Use named arguments

removes the need to remember order of args

```python
def team(name, project):
    print(name, "is working on an", project)

team(project = "Edpresso", name = 'FemCode')
```

## Unlimited function arguments with `*args`

```python
def unlimited_arguments(*args):
  for argument in args:
    print(argument)

unlimited_arguments(*[1,2,3,4])
```

## Unpack function arguments

ends up passed to function as Tuple

```python
my_function(*[1,2,3,4])
```

## unpack dictionary with `**keyword_args`

```python
def unlimited_arguments(*args, **kargs):
  print(kargs)
  for argument in args:
    print(argument)

unlimited_arguments(*[1,2,3,4], name='Evan', age=17)
```

## Call a named function by variables

ex: 
```python
from operator import add, mul, sub, floordiv

OPERATIONS = {
    "plus": add,
    "minus": sub,
    "multiplied": mul,
    "divided": floordiv,
}

operation = 'plus'
OPERATIONS['plus'](3,1)
```