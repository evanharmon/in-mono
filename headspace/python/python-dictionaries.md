# PYTHON DICTIONARIES

## Resources

- [Python dictionary methods w3Schools](https://www.w3schools.com/python/python_ref_dictionary.asp)

## Features
unordered map
- resizable hash table
- only built-in mapping type for Python
- values can be any data type or structure
- constant time lookup for key / value
- views can be sorted

## Limitations
- keys must be hashable and unique across a dict
- uses significantly more memory than a list 
- no builtin sorting method for underlying dicts

## Best practices
- use literals for declaration `inv = {}` rather than `dict()`

## Changes
python 3.7+: dicts preserve FIFO order for `keys()`, `values()`, `items()`

## Views
`.keys()`, `.values()`, `.items()` are views and are dynamic.
Underlying data changes will be reflected in the view

views are now reversible in python 3.8+. Can be iterated LIFO.
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
new_rev_dict = reversed(inventory.items())
```

views can be sorted:
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
# Sort the view
sorted_inv = sorted(inventory.items())
# create new sorted dict from sorted view
new_dict = dict(sorted(inventory.items()))
```

sort by tuple value in a dict
```python
my_dict = {'hey': 1, 'hi': 5, 'hello': 3}
sorted_tuples = sorted(my_dict.items(), key=lambda x: x[1])
print(sorted_tuples)  # Output: [('hey', 1), ('hello', 3), ('hi', 5)]
```

## Basic Operations

### Create dict from key=value

```python
# or as literal
d = {"name": "daniel", "age": 100}
# or
dict([('name', 'Wombat'),('speed', 23),('land_animal', True)])
```

### Create dict from key,value tuples
```python
dict(name="Black Bear", speed=40, land_animal=True)
```

### Add key

```python
d["name"] = "mike"
```

### Update value

```python
d.update({'name':'evan'})
# or
d["name"] = "mike"
```

### Delete key

```python
my_dict = {"name": "John", "age": 30, "city": "New York"}
del my_dict["age"]
print(my_dict)  # Output: {"name": "John", "city": "New York"}
```

### Pop key value pair from dictionary
alternative to `del`
```python
# returns only value
# will throw a KeyError if key not found and default not set
value = d.pop("name")
# Set default to prevent KeyError
value = d.pop("name", None)
```

### Get value

```python
# get() avoids the KeyError
d.get('name')
# or
# throws a `KeyError` if key not found
d["name"]
```

### Retrieve list of items

`d.items()`

### Retrieve just keys

`d.keys()`

### Retrieve just values

`d.values()`

### Check if key exists

`has_key` removed in python3. Use `in`

## Iterating

### for loop iteration dictionary

```python
for item in dict({ 1: 1, 2: 1, 3: 3}):
  print(item)
```

### dict comprehension to iterate over items

```python
{k: v for k, v in my_dict.items()}
```

### iterate over key, value tuple
```python
for key, value in dict({ 1: 1, 2: 1, 3: 3}).items():
  print(key, value)
```
