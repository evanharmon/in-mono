# PYTHON LISTS

## Features
Arrays are known as Lists
- mutable collection of items in a __sequence__
- implemented as dynamic arrays

## Best practices
- use literals for declaration `items = []` rather than `list()`

## Access items

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
