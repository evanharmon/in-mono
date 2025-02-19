# PYTHON STRINGS

## Resources

- [Python string methods](https://docs.python.org/3/library/stdtypes.html#string-methods)

## Limitations

- immutable
- primitive

## Declare multi-line string

```python
text = '''line one
line two
'''
```

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

## Join strings using iterable

```python
a = "hello"
b = "world"
c = a.join(b)
```

## Repeat string

`print x + 4`

## Reverse string

```python
string = "hello world"
print string[::-1]
# or
''.join(reversed(string))
```

## Compare strings

returns index

```python
string = "hello world"
lookfor = "hello"
string.find(lookfor)
```

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

## Reference char by index

returns new string of course

```python
text = 'school'
text[0] # 's'
```

## Convert to and from ASCII
```python
# Convert from letter to ASCII
ord('E') # 65
# Convert from ASCII to letter
chr(69)  # 'E'
```