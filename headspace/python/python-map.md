# PYTHON MAP

## Resources

- [Python map docs](https://docs.python.org/3/library/functions.html#map)
- [RealPython map function](https://realpython.com/python-map-function/)

## Limitations

- list comprehension is often faster

## Multiply all elements in a list

```python
my_list = [1,2,3,4,5]
def multiply(el):
  return el * 2
list(map(multiply, my_list))
```

## Map with lambda

```python
my_list = [1,2,3,4,5]
list(map(lambda el: el * 2, my_list))
```
