# PYTHON STRINGS

## Resources

- [Python string methods](https://docs.python.org/3/library/stdtypes.html#string-methods)

## Convert

```python
x = 10
str(10)
```

## Concat

```python
x = 'hello'
y = 'world'
print x + y
```

## Join strings

```python
a = "hello"
b = "world"
c = a.join(b)
```

## Repeat string

`print x + 4`

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

## Reverse string

```python
string = "hello world"
print string[::-1]
```

## Compare strings

returns index

```python
string = "hello world"
lookfor = "hello"
string.find(lookfor)
```

## f-strings

`f'One for {name}, one for me.'`

## Trim / Strip whitespace

returns a copy

strip left: `' hi'.lstrip()`
strip right: `' hi'.rstrip()`
strip left and right: `' hi '.strip()`

## Substring

```python
string = "freeCodeCamp"
print(string[0:5])
```

## Search start of string

simple:

```python
'square'.startswith('sq')
```

start search at index. 1 based index argument

```python
'square'.startswith('qu', 1)
```
