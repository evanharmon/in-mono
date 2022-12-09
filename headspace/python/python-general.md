# PYTHON GENERAL

## Resources

- [Python Basics by Exercism](https://exercism.org/tracks/python/concepts/basics)

## Check Python Install / Version

`python -V`

## Install Python

```console
brew install python3
```

## Null

`x = none`

## Placeholder for future code

`pass`

## Global variable

to use a global variable, have to explicitly tell python to do so

```python
name = 'evan'
def get_name():
  global name
  name = input('Your name: ')

get_name()
print(name)
```

## Check for main

only run code when called directly by Python and NOT imported

```python
if __name__ == '__main__':
    node = Node()
    node.listen_for_input()
```
