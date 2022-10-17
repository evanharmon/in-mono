# PYTHON LISTS

Arrays are known as Lists

## Access last item in array

`print names[-1]`

## Access items in array in reverse

`print names[3:0:-1]`

## Reverse

mutates

`li.reverse()`

## Get max of list

`max(li)`

## Push / Append

`li.append(-2)`

## Pop

`li.pop()`

## Insert at position

`li.insert(0, 'a')`

## Get index of array item

`li.index(5)`

## Check if element in list

`print 100 in li`

## Remove specific element from list

`li.remove(5)`

## Sum

equivalent of js `reduce`
`sum([0,1,2])`

## Unpack

MUST unpack all elements in list

`a, b, c = [1,2,3]`

## Shallow Copy

```python
list_one = [1,2,3,4]
list_copy = list_one.copy()
```

## Access part of a list

like a slice, stop index element NOT included

```python
list_one = [15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51]
list_one[4:8] # [27, 30, 33, 36]
```
