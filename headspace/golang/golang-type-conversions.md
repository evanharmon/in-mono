# GOLANG TYPE CONVERSIONS

## Conversions

### float64 to string
```go
myFloat := 3.14159
myString = strconv.FormatFloat(myFloat, 'f', 6, 64)
```

### float64 to int
```go
f := 3.14
i := int(math.Round(f))
```

### int to a string
```go
a := 5
b := strconv.Itoa(a)
``` 

### string to int
```go
a := "5"
b, err := strconv.Atoi(a)
if err != nil {
  return err
}
```
