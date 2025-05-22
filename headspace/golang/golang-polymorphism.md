# GOLANG POLYMORPHISM

## Features
ability to take on different behavior via the implementation of types


## Example

```golang
package main

import "fmt"

// Define an interface called 'Animal'
type Animal interface {
	Speak() string
}

// Define a struct called 'Dog' that implements the Animal interface
type Dog struct{}

func (d Dog) Speak() string {
	return "Woof!"
}

// Define a struct called 'Cat' that also implements the Animal interface
type Cat struct{}

func (c Cat) Speak() string {
	return "Meow!"
}

// A function that accepts any type that implements the Animal interface
func MakeSound(a Animal) {
    fmt.Println(a.Speak())
}

func main() {
  // Create instances of Dog and Cat
	dog := Dog{}
	cat := Cat{}

  // Call MakeSound with both instances - polymorphism in action!
	MakeSound(dog) // Output: Woof!
	MakeSound(cat) // Output: Meow!

  // You can also store different concrete types into a slice of the interface type
  animals := []Animal{dog, cat}
  for _, animal := range animals {
      MakeSound(animal) // Will output "Woof!" then "Meow!"
  }
}
```
