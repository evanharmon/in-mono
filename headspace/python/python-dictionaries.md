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

## Create, update, and change dictionaries

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

### Create dict from list

```python
names = ['John', 'Mary', 'Bob']
people_dict = {name: None for name in names}
print(people_dict)
# Output: {'John': None, 'Mary': None, 'Bob': None}
```

or

```python
names = ['John', 'Mary', 'Bob']
people_dict = dict((name,0) for name in names)
print(people_dict)
```

### Update value

```python
d.update({'name':'evan'})
# or
d["name"] = "mike"
```

### Merge dictionaries with update
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
shop_inventory = {'screwdriver': 1, 'hammer': 1}
# dict 2 items will be added to dict 1
# dict 2 items will OVERWRITE dict 1
inventory.update(shop_inventory)
```

### Merge and create new dict with union
requires python 3.9+
```python
house_inventory = {'paper_towels': 5, 'distilled_water': 10}
shop_inventory = {'screwdriver': 1, 'hammer': 1}
# Dict 2 takes precedence
inventory = house_inventory | shop_inventory
```

or merge dict1 with another dict or iterable of (key,value) pairs
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
iterable_list = [(k, v) for k, v in [('soda', 1), ('chips', 5)]]
inventory |= iterable_list
```

### Merge similar dictionary keys and retain all values

```python
cart = {'Banana': 3, 'Apple': 2, 'Orange': 1, 'Milk': 2}
aisle_map = {'Banana': ['Aisle 5', False], 'Apple': ['Aisle 4', False], 'Orange': ['Aisle 4', False], 'Milk': ['Aisle 2', True]}
result = {k: [cart[k]] + v for k, v in aisle_mapping.items() if k in cart}
```

### Pop key value pair from dictionary
```python
# returns only value
# will throw a KeyError if key not found and default not set
value = d.pop("name")
# Set default to prevent KeyError
value = d.pop("name", None)
```

## Accessing dictionaries

### Get value

```python
# get() avoids the KeyError
d.get('name')
# or
# throws a `KeyError` if key not found
d["name"]
```

### Get value or insert if missing

```python
inv = {}
item = inv.setdefault('paper_towels', 0)
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

### Populate dictionary from iterable

```python
items = ['acura', 'honda', 'toyota']
cars = dict().fromkeys(items, 0)
```

## Recipes

### Invert dictionary

handy to look up frequencies and then have key as value

`dict((v, k) for k, v in my_map.items())`

### build up histogram from List

```python
items = [1,1,3,4,5,6]
counts = dict()
for i in items:
  counts[i] = counts.get(i, 0) + 1
```

or
```python
items = ["coal", "wood", "wood", "diamond", "diamond", "diamond"]
d = dict()
for item in items:
  d.update({item: d.get(item, 1) + 1})
```