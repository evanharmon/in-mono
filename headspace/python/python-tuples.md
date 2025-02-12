# PYTHON TUPLES

## Resources

- [Python tuple docs](https://docs.python.org/3/library/stdtypes.html#tuples)

## Features

- immutable

## Return a single value tuple

`return ('Evan',)`

## Unpack

`green, yellow, red = fruits`

## Concatenate tuples
```python
tuple = ('Jon', 'George') + ('Betty', 'Joan')
```

## Access elements in a tuple

```python
tuple = ('Jon','George','Betty','Joan')
print(tuple[0])
```

## Iterate over a tuple

```python
tuple = ('Jon','George','Betty','Joan')
for value in tuple:
    print(value)
```

## Check if value exists in tuple

```python
tuple = ('Jon','George','Betty','Joan')
if 'Jon' in tuple:
    print("Found Jon")
```

## Create tuple of characters from string
so easy!
```python
tuple('2FA')
# creates tuple: ('2,'F','A')
```

## Join tuple of chars back in to a string
```python
t = tuple('2FA')
print(''.join(t))
```
