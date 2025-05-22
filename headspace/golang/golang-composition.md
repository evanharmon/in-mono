# GOLANG COMPOSITION

## Features
go doesn't use inheritance - uses composition instead
- construct complex types using simpler ones
- can be used to extend or override functionality

## Embedding
include one struct in another

## Anonymous Fields
declared in a struct without a name - type becomes the name

## Examples

```golang
package main

import "fmt"

// Base struct
type Base struct {
	ID   int
	Name string
}

// Method for Base
func (b Base) Describe() string {
	return fmt.Sprintf("ID: %d, Name: %s", b.ID, b.Name)
}

// Container struct embedding Base
type Container struct {
	Base // Anonymous field embedding Base
	Description string
}

func main() {
	c := Container{
		Base: Base{
			ID: 1,
			Name: "Example",
		},
		Description: "A container with a base.",
	}

	fmt.Println(c.Describe()) // Accessing method of embedded Base
	fmt.Println(c.ID)        // Accessing field of embedded Base
	fmt.Println(c.Name)       // Accessing field of embedded Base
	fmt.Println(c.Description)
}
```