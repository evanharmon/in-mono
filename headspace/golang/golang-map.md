# GOLANG MAP

## Resources
- [Blog](https://blog.golang.org/go-maps-in-action)

## Features
Hash table - unordered key value
- NOT slices
- re-assigning creates reference NOT a copy

## Examples

### Create a map
```golang
m1 := make(map[string]int)
m1["one"] = 1
m1["two"] = 2
fmt.Println(m1) // Output: map[two:2 one:1]

m2 := map[string]int{"hello": 5, "world": 3}
fmt.Println(m2) // Output: map[world:3 hello:5]
```

### Nested map
```golang
myMap := map[string][]float64{
    "Apple":   {1.23, 2.34},
    "Banana":  {0.56, 1.12},
    "Orange":  {0.89, 1.78},
    "Grape":   {0.23, 0.46},
    "Kiwi":    {0.78, 1.56},
}
```

### Check If Map Contains Key

```golang
if val, ok := dict["foo"]; ok {
    //do something here
}
```

or
```golang
brand, ok := brands["samsung"]
if !ok {
    fmt.Println("Brand not found")
} else {
    fmt.Printf("Found brand: %s\n", brand)
}
```
