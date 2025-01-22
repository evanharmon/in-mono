# PYTHON LISTS

## Features
Arrays are known as Lists
- mutable collection of items in a __sequence__
- implemented as dynamic arrays

## Best practices
- use literals for declaration `items = []` rather than `list()`

## Access items in list

### Access last item in array

`print(names[-1])`

### Access items in array in reverse

`print(names[3:0:-1])`

### Get even number indexed items in list
`list[0::2]`

### Get odd number indexed items in list
`list[1::2]`

### Get max of list

`max(li)`

### Get index of array item

`li.index(5)`

## Mutate list

### Reverse

mutates

`li.reverse()`

### Push / Append

`li.append(-2)`

### Pop

`li.pop()`

### Insert at position

`li.insert(0, 'a')`

### Remove specific element from list

`li.remove(5)`

## Recipes

### Check if element in list

```python
li = [100,101,102]
print 100 in li
```

### Sum list

equivalent of js `reduce`
`sum([0,1,2])`

### Unpack

MUST unpack all elements in list

`a, b, c = [1,2,3]`

### Shallow Copy

```python
list_one = [1,2,3,4]
list_copy = list_one.copy()
```

### Access part of a list

like a slice, stop index element NOT included

```python
list_one = [15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51]
list_one[4:8] # [27, 30, 33, 36]
```

### Pass list as individual elements to function

```python
def unlimited_arguments(*args):
  for argument in args:
    print(argument)

unlimited_arguments(*[1,2,3,4])
```

### Merge lists and create a new list
```python
r1 = [1,2,3]
r2 = [4,5,6]
return r1 + r2
```

### Add a list to another
```python
r1 = [1,2,3]
r2 = [4,5,6]
r1.extend(r2)
```

### Get the midpoint item in a list
```python
r = [1,2,3,4,5,6,7]
# // rounds down (floors)
mid_idx = len(r) // 2
print(r[mid_idx])
```