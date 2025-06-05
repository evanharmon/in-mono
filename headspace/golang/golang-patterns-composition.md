# GOLANG PATTERNS COMPOSITION

## Features
build complex structures by combining simpler ones
- embeds structs within structs
- `has a` type relationship
- outer struct can access fields and methods on embedded structs

## Best practices
- keep different responsibilities in different composite objects

## Use cases
- file systems
- graphics systems
- user interfaces
- e-commerce systems

## Advantages
- uniformity
- extensibility
- simplified code

## Disadvantages
- additional overhead
- dependency between leaf / composites
- generalization could lead to inefficient use of resources

## Gotchas
- recursive structures can lead to infite loops or excessive memory use

## Components

### Component interface 
defines common methods for both leaf and composite objects to implement

### Leaf
basic element without any children

### Composite
container to hold leaf elements or other composites

### Client
common interface for client to interact with components

## Examples

### Storage example
```golang
// Defines the behavior of a storage device
type Storage interface {
	Read(location string) string
	Write(location string, data string)
}

// Implements Storage for a hard drive
type HardDrive struct{}

func (hd HardDrive) Read(location string) string {
	return "Data from hard drive at " + location
}

func (hd HardDrive) Write(location string, data string) {
    // write data to hard drive
}

// Implements Storage for cloud storage
type CloudStorage struct{}

func (cs CloudStorage) Read(location string) string {
	return "Data from cloud at " + location
}

func (cs CloudStorage) Write(location string, data string) {
    // write data to cloud
}

// A struct that composes different storage types
type MultiStorage struct {
	primary   Storage
	secondary Storage
}

// MultiStorage implements the Storage interface by delegating to its composed storages
func (ms MultiStorage) Read(location string) string {
	// Try reading from primary first, then secondary
	data := ms.primary.Read(location)
	if data == "" {
		data = ms.secondary.Read(location)
	}
	return data
}

func (ms MultiStorage) Write(location string, data string) {
    ms.primary.Write(location, data)
}
```

### Nested graphical UI
```go
package main

import "fmt"

// Component is the interface that all graphical components must implement
type Component interface {
	Draw()
}

// Circle represents a leaf component
type Circle struct {
	name string
}

func NewCircle(name string) *Circle {
	return &Circle{name: name}
}

func (c *Circle) Draw() {
	fmt.Printf("Drawing circle: %s\n", c.name)
}

// Square represents a leaf component
type Square struct {
	name string
}

func NewSquare(name string) *Square {
	return &Square{name: name}
}

func (s *Square) Draw() {
	fmt.Printf("Drawing square: %s\n", s.name)
}

// Window represents a composite component that can contain other components
type Window struct {
	name       string
	components []Component
}

func NewWindow(name string) *Window {
	return &Window{
		name:       name,
		components: make([]Component, 0),
	}
}

func (w *Window) Add(component Component) {
	w.components = append(w.components, component)
}

func (w *Window) Draw() {
	fmt.Printf("Drawing window: %s\n", w.name)
	for _, component := range w.components {
		component.Draw()
	}
}

func main() {
	// Create a nested window
	mainWindow := NewWindow("Main Window")
	
	// Create some shapes
	circle := NewCircle("Red Circle")
	square := NewSquare("Blue Square")
	
	// Create a nested window
	nestedWindow := NewWindow("Nested Window")
	nestedWindow.Add(circle)
	nestedWindow.Add(square)
	
	// Add the nested window to the main window
	mainWindow.Add(nestedWindow)
	
	// Draw everything
	fmt.Println("Drawing the entire composition:")
	mainWindow.Draw()
}
```
