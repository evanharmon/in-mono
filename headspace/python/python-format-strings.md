# PYTHON FORMAT STRINGS

## Resources

- [Python format specification mini language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
- [RealPython String Format Techniques](https://realpython.com/python-formatted-output/)

## f-strings

`f'One for {name}, one for me.'`

## Print as floating point

```python
val = 1.02567
'Value: {0:f}'.format(val)
```

## Print floating point with one decimal point

```python
val = 25
'Value: {0:.1f}'.format(val)
f'Value: {val:.2f}'
```

## Pad left

```python
val = 1.02567
'Value: {0:10}'.format(val)
```

## Align right

```python
val = 1.02567
'Value: {0:>10.1f}'.format(val)
```

``

## Align left

```python
val = 1.02567
'Value: {0:<10.1f}'.format(val)
```

## Center text

```python
val = 1.02567
'Value: {0:^10.1f}'.format(val)
```

## Align and fill in empty spaces

```python
val = 1.02567
'Value: {0:-^10.1f}'.format(val)
```
