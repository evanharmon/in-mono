# GOLANG INTERFACES

## Resources

- [Convert Types To Interface Via Copy](https://golang.org/doc/faq#convert_slice_of_interface)

## Features
defines behaviors an object can implement
- interface is a tuple `(type, value)`

## Limitations
- have to check that type and value are nil - don't just check the interface!
- no explicit declaration that a type implements an interface - so can impl methods on a vanilla struct

## Interface Values

two-word data structures
first-word: pointer to iTable
second-word: pointer to stored value

## iTable

contains:
type of value
list of methods associated with value

## Naming Conventions

If interface only has a single method, name the interface ending with 'er'

```golang
type Worker interface {
  Search()
}
```

## Check if nil

```golang
package main

import "fmt"

// Define an interface
type Stringer interface {
    String() string
}

// Define a concrete type
type MyString struct {
    value string
}

// Implement the Stringer interface
func (ms *MyString) String() string {
    return ms.value
}

func main() {
    // Case 1: Interface is nil
    var i Stringer = (*MyString)(nil) // i is a non-nil interface holding a nil MyString

    fmt.Println("Is i nil?", i == nil)  // Output: false
    fmt.Println("Is i.String() nil?", i.String() == "") // Output: false

    // Case 2: Interface holds a non-nil concrete type, but the concrete type is nil
    var j Stringer
    var ms *MyString = nil
    j = ms // j is a non-nil interface holding a nil MyString

    fmt.Println("\nIs j nil?", j == nil)  // Output: false
    fmt.Println("Is j.String() nil?", j == nil) // Output: false

    // Case 3: Interface is non-nil and the concrete type is also non-nil
    var k Stringer
    ms = &MyString{value: "Hello"}
    k = ms

    fmt.Println("\nIs k nil?", k == nil) // Output: false
    fmt.Println("Is k.String() nil?", k.String() == "") // Output: false

    // Case 4: Demonstrate type assertion to check for nil pointer
    var l interface{} = (*MyString)(nil)

    if l == nil {
        fmt.Println("\nl is nil (interface)")
    } else {
        fmt.Println("\nl is not nil (interface)")
    }

    // Type assertion to check if the underlying pointer is nil
    if ms, ok := l.(*MyString); ok && ms == nil {
        fmt.Println("\nUnderlying pointer in l is nil")
    } else {
        fmt.Println("\nUnderlying pointer in l is not nil")
    }
}
```
