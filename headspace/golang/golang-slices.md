# GOLANG SLICES

## Resources
- [Golang blog slices](https://blog.golang.org/slices)

## Features
dynamic sequence of elements
- not fixed in size and can grow
- looks a lot like a smart pointer to me
- supports length `len()` and capacity `cap()` checks

## Pseudo Struct Example For Slices
```c
struct Slice {
  addr     *[]int
  length   int
  capacity int
}
```

## Passing Slices
Pass around slices instead of pointers. Easier to work with and very cheap

## Slice Headers
Contents of a slice can be edited but NOT the header
Copy of header is sent, must return a result parameter to affect header
```golang
func SubtractOneFromLength(slice []byte) []byte { }
```

## Examples

### Create empty slice
```golang
// Basic
mySlice := make([]int, 10)
// With max capacity
mySlice := make([]int, 10, 15)
```

### Create slice with elements
```golang
daysOfWeek := []string{"monday","tuesday","wednesday","thursday","friday","saturday","sunday"}
```

## Create subslice
slice of a slice
```golang
weekDays := daysOfWeek[0:4]
```

## Append to slice
```golang
activeMonths := []string{"january"}
// allocates new array if necessary
activeMonths = append(activeMonths, "february")
```

## Remove from slice
go doesn't have a built-in method to remove directly.
Instead you have to slice out what you want from the slice
```golang
colors := []string{"red", "blue", "green", "yellow", "orange"}
colors = append(colors[:2], colors[3:]...)
fmt.Println(colors)
```

## Copy a slice
```golang
original := []int{1, 2, 3, 4, 5}
// Create an empty slice to copy into
copyTo := make([]int, len(original))
fmt.Println("Before copying:", original)
fmt.Println("Initially copied to:", copyTo)
// Use the copy function to copy the slices
var n int = copy(copyTo, original)
fmt.Println("Copied", n, "elements.")

fmt.Println("After copying:")
fmt.Println(original)  // The original slice remains unchanged.
```

## Gotchas

### Beware Creating Slices From Slices
- [Blog](https://blog.golang.org/go-slices-usage-and-internals)
