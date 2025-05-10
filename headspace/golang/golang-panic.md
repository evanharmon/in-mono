# GOLANG PANIC

## Features
runtime error
- unwinds stack
- runs any deferred functions
- prints error message

## Examples

### Panic on index out of range
```golang
numbers := []int{1, 2, 3}
fmt.Println(numbers[4]) // Index out of range
```

### Panic on nil pointer dereference
```golang
var ptr *int // Declaring a nil pointer of type int
fmt.Println(*ptr) // This will cause a runtime panic
```
