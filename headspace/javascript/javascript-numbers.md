# JAVASCRIPT NUMBERS

## Resources

- [Javascript 32bit Int Stack Overflow](https://stackoverflow.com/questions/47600096/what-is-32-bit-integer-in-javascript)

## Limitations

- all primitive numbers are treated as Floats

## Check For 32bit Overflow

```javascript
if (myInt > Math.pow(2, 31) - 1) {
  return 0
}
```
