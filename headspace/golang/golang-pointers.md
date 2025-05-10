# GOLANG POINTERS

## Resources
- [Programiz go pointers](https://www.programiz.com/golang/pointers)
- [Programiz go pointers and functions](https://www.programiz.com/golang/pointers-functions)
- [Programiz go pointers to structs](https://www.programiz.com/golang/pointers-struct)

## Features
raw pointers in go. Go doesn't have the `mut` keyword like Rust.
pointers are used for in-place modificiations
- can be `nil`
- use `&` to get the reference / memory address
- use `*` to get dereference / get the value

## Limitations
- DO NOT have smart pointers / automatic memory management features like Rust / C++
- dangling pointers are possible

## Pointers

```go
var num int = 5
// prints the value stored in variable
fmt.Println("Variable Value:", num)
// prints the address of the variable
fmt.Println("Memory Address:", &num)
```

### Create pointer of type string

```go
var name = "John"
var ptr *string

// store the reference to the memory address
ptr = &name

// * to get the value pointed by ptr, dereference the reference
fmt.Println(*ptr) // John
```

### In-place modification via pointer
this is how go handles `mut` like Rust
```golang
package main

import "fmt"

// Define a struct
type Circle struct {
	radius float64
}

// Function to modify the Circle's radius using a pointer
func modifyCircle(c *Circle, newRadius float64) {
	c.radius = newRadius
}

func main() {
	myCircle := Circle{radius: 5}
	fmt.Println("Initial radius:", myCircle.radius) // Output: Initial radius: 5
	// Modify the radius using the modifyCircle function and passing a pointer to myCircle
	modifyCircle(&myCircle, 10)
	fmt.Println("Modified radius:", myCircle.radius) // Output: Modified radius: 10
}
```