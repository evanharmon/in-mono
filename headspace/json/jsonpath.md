# JSONPATH

## Resources
- [JSONPATH Github](https://github.com/json-path/JsonPath)

## Basic List Queries

### Get second list item
`$.spec.container[1]`

### Get last list item
use this format so it works across implementations
start from last element, then go to end
`$[-1:0]` or `$[-1:]`

### Get last n items
gets last 3 items
`$[-3:0]`

### Get multiple list items by index
`$.spec.container[0,1]`

### Get range of list items
note it's not inclusive
`$.spec.container[0:2]`

### Get items in a range but skip every other item
`$[0:10:2]`
so for every 5th item, it would be `$[0::4]`

### Get items 3 to the end but skip the last item
remember end is non-inclusive
`$[3:-1]`

### Get all items greater than 40
`$[?(each item in the list > 40)]`
or
`$[?(@ > 40)]`

### Get items in relation to indexes
get 40th item
`$[?(@ == 40)]`

get item not in specific index
`$[?(@ != 40)]`

get items in specific indexes
`$[?(@ in [40,43,45])]`

don't get items in specific indexes
`$[?(@ nin [40,43,45])]`

## Basic Dictionary Queries

### Get nested dictionary values
`$.spec.serviceAccountName`

### Get all properties of dictionary with wildcard
`$.*.price` for a simple object like the below
```json
{ "banana": { "price": "1" }, "apple": { "price": "2" } }
```

## Basic mixed object queries

### Get all properties of a list
`$[*].name`

works for a dictionary with lists as well
`$.prop1[*].price`

### Get item value with specific key / value of another property
`$.spec.containers[?(@.name == "nginx")].image`