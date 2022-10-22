# PYTHON FILES

## Resources

- [Python reading and writing files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)
- [Python open](https://docs.python.org/3/library/functions.html?highlight=open#open)

## Modes

`r` - read access only
`w` - write access only, OVER WRITES
`r+`- read and write access
`x` - write access exclusive creation, fails if already exists
`a` - write access append to end of file if exists
`b` - open in binary mode for writing
`t` - text mode (default)
`+` - open for updating (read and write)

default mode is `rt` for read access only text

## Read

`f.read()` - read entire file

## readlines

`f.readlines()` - read one line at a time, returns empty line if no more lines exist

```python
with open('demo.txt', mode='r', encoding='utf8') as f:
    file_content = f.readlines()
    for line in file_content:
      print(line[:-1])
```

## readline

`f.readline()` - read single line

```python
with open('demo.txt', mode='w', encoding='utf8') as f:
    line = f.readline()
    while line:
      print(line)
      line = f.readlie()
```

## With

have python close the file when done

```python
with open('demo.txt', mode='w', encoding='utf8') as f:
    f.write('hello from python\nThis is a new line')
    file_content = f.readlines()
    line = f.readline()
```
