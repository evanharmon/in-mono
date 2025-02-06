# PYTHON STRINGS CHECKS

## Check for alphanumeric

```python
# True
'123'.isalnum()
# False bc of punctuation / spaces
'123 ,'.isalnum()
```

## Check if digit

```python
# True
"5".isdigit()
# False bc of space
"5 ".isdigit()
# False bc of punctuation
"5,".isdigit()
```

## Check if number

```python
# True
"5".isnumeric()
```

### Differences between `isalpha` and `isdigit` and `isalnum`
note how `isalnum()` will return True if a digit AND alpha exists
so don't use it if you want to test alpha OR digit
```python
'a1'.isalpha(), 'a1'.isdigit(), 'a1'.isalnum()
# (False, False, True)
```