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
```

## Use named arguments

removes the need to remember order of args

```python
def team(name, project):
    print(name, "is working on an", project)

team(project = "Edpresso", name = 'FemCode')
```
