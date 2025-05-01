# GOLANG SWITCH STATEMENT

## Examples

### Basic use and fallthrough
```golang
package main

import "fmt"

func main() {
    i := 2
    
    // Example 1: Simple switch statement with strings
    switch i {
        case 0:
            fmt.Println("Zero")
        case 1:
            fmt.Println("One")
        default:
            fmt.Println("Other number")
    }
    
    // Example 2: Using fallthrough in a switch statement
    switch i {
        case 0, 1:
            fmt.Println("Zero or One")
            fallthrough
        default:
            fmt.Println("Any other number")
    }
    
    // Example 3: Pattern matching with structs
    type Animal struct {
        Name string
    }
    
    animals := []Animal{
        {"Cat"},
        {"Dog"},
        {"Tiger"},
    }
    
    for _, animal := range animals {
        switch animal.Name {
            case "Cat":
                fmt.Println("Mammal")
            case "Dog", "Tiger":
                fmt.Println("Wild Animal")
            default:
                fmt.Println("Unknown Animal")
        }
    }
}
```