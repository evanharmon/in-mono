# PYTHON LIST RECIPES

## Shallow copy

```python
list_one = [1,2,3,4]
list_copy = list_one.copy()
```

## Deep copy
```python
import copy

# Create a list
my_list = [[1, 2], [3, 4]]
# Make a deep copy of the list
deep_copy_of_list = copy.deepcopy(my_list)
print(deep_copy_of_list)  # Output: [[1, 2], [3, 4]]
```

## Check if element in list

```python
li = [100,101,102]
print 100 in li
```

## Sum list

equivalent of js `reduce`
`sum([0,1,2])`

## Unpack

MUST unpack all elements in list

`a, b, c = [1,2,3]`

## Access part of a list

like a slice, stop index element NOT included

```python
list_one = [15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51]
list_one[4:8] # [27, 30, 33, 36]
```

## Pass list as individual elements to function

```python
def unlimited_arguments(*args):
  for argument in args:
    print(argument)

unlimited_arguments(*[1,2,3,4])
```

## Merge lists and create a new list
```python
r1 = [1,2,3]
r2 = [4,5,6]
return r1 + r2
```

## Add a list to another
```python
r1 = [1,2,3]
r2 = [4,5,6]
r1.extend(r2)
```

## Get the midpoint item in a list
```python
r = [1,2,3,4,5,6,7]
# // rounds down (floors)
mid_idx = len(r) // 2
print(r[mid_idx])
```

## Sort by specific key in a tuple in a list
sort by tuple value in a list

```python
my_dict = [('hey', 1), ('hi', 2), ('hello', 3)]
sorted_tuples = sorted(my_dict, key=lambda x: x[1])
print(sorted_tuples)  # Output: [('hey', 1), ('hi', 2), ('hello', 3)]
```
