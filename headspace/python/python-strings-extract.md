# PYTHON STRINGS EXTRACT

## Split string to array

`sen = list("hello World")`

## Split String By Separator

note `split` is greedy and will ignore ALL characters of the split

```python
'school'.split('o') # output: ['sch','','l']
```

split only first instance

```python
'school'.split('o',1) # output: ['sch','ol']
```

## Split every n chars in a string in to list
handles leaving any remaining chars in the part of the list
```python
s = 'abcdefg'
chars_per_string = 3
result = [''.join(s[i:i+chars_per_string]) for i in range(0, len(s), chars_per_string)]
```

## Trim / Strip whitespace

returns a copy

strip left: `' hi'.lstrip()`
strip right: `' hi'.rstrip()`
strip left and right: `' hi '.strip()`

## Get slice of string

starts at index 0, stop excluded of course

```python
text = 'school'
text[0:2] # 'sc'
```
