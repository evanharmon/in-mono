# PYTHON DICTIONARIES

## Resources

- [Python dictionary methods w3Schools](https://www.w3schools.com/python/python_ref_dictionary.asp)

## Features

- unordered map

## Create key / value dictionary

`counts = dict()` or `d = {"name": "daniel", "age": 100}`

## Get value

`d.get('name')`

## Retrieve list of items

`d.items()`

## Retrieve just keys

`d.keys()`

## Retrieve just values

`d.values()`

## Update value

`d["name"] = "mike"`

## Check if key exists

`has_key` removed in python3. Use `in` or `.get()`

`if c in d` or `d.get('c')`

## Update value

`d.update({'name':'evan'})`

## build up histogram from List

```python
items = [1,1,3,4,5,6]
counts = dict()
for i in items:
  counts[i] = counts.get(i, 0) + 1
```

## Iterate through dictionary

```python
for item in dict({ 1: 1, 2: 1, 3: 3}):
  print(item)
```

## Invert dictionary

handy to look up frequencies and then have key as value

`dict((v, k) for k, v in my_map.items())`
