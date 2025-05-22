# GOLANG PATTERNS FACTORY

## Resources
- [Medium golang factory method pattern](https://medium.com/@swabhavtechlabs/implementing-the-factory-design-pattern-in-golang-a-comprehensive-guide-36d351b53e3a)

## Feature
create instances of different types based on runtime information
- subclasses decide which class to instanciate

## Use cases
- app configuration
- cross-platform apps
- plugins / extensions
- complex objects

## Advantages
- encapsulates object creation
- code flexibility
- consistency and standardization
- decoupling and modularity

## Disadvantages
- increases complexity
- function call overhead in performance-critical code
- additional classes

## Components

### Product
interface / abstract class
type of objects for factory to create

### Concrete product
classes of exactly what different products are implemented

### Creator
interface / abstract class
method for creating objects

### Concrete Creator
classes for creating different factory types

### Client
used to create objects

## Examples

### Different types of documents
this example uses a nice single method to create the product interface in a switch
otherwise you end up with lots of factory struct / methods

```golang
package main

import "fmt"

// Product interface
type Document interface {
	getType() string
	display()
}

// Concrete Product 1
type PDF struct {
	content string
}

func (p *PDF) getType() string {
	return "PDF"
}

func (p *PDF) display() {
	fmt.Println("Displaying:", p.content, " as PDF")
}

// Concrete Product 2
type Word struct {
	content string
}

func (w *Word) getType() string {
	return "Word"
}

func (w *Word) display() {
	fmt.Println("Displaying:", w.content, " as Word")
}

// Creator function (factory method)
func createDocument(documentType string, content string) Document {
	switch documentType {
	case "PDF":
		return &PDF{content: content}
	case "Word":
		return &Word{content: content}
	default:
		return nil // Or return a default document type if desired
	}
}

func main() {
	// Client code using the factory method
	pdfDoc := createDocument("PDF", "Some PDF content")
	if pdfDoc != nil {
		pdfDoc.display()
	}

	wordDoc := createDocument("Word", "Some Word content")
	if wordDoc != nil {
		wordDoc.display()
	}

	unknownDoc := createDocument("Unknown", "Some content")
	if unknownDoc != nil {
		unknownDoc.display()
	}
}
```