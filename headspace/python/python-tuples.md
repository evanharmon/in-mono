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

## Use sorted tuples for checking anagrams
```python
list1 = ['silent', 'listen']
sorted_tuples = [tuple(sorted(word)) for word in list1]
print(sorted_tuples)
# Output: [('e', 'i', 'l', 'n', 's', 't'), ('e', 'i', 'l', 'n', 's', 't')]
# makes it easy to compare words against each other for potential anagrams
```