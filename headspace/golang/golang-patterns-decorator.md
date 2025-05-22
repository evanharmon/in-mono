# GOLANG PATTERNS DECORATOR

## Resources
- [Golang decorator pattern](https://refactoring.guru/design-patterns/decorator/go/example)

## Feature
add new functionality to existing objects without altering structure
- wraps object with decorator classes

## Use cases
- user interface components
- streams in I/O
- logging
- middleware for web apps

## Advantages
- flexible
- single responsibility principle
- resuable

## Disadvantages
- added complexity
- heavy wrapping
- not intuitive
- lots of additional method calls which can impact performance

## Examples

### Text formatter

```golang
package main

import (
	"fmt"
	"strings"
)

// Component Interface:  TextFormatter
type TextFormatter interface {
	Format(text string) string
}

// Concrete Component: BasicFormatter
type BasicFormatter struct{}

func (bf *BasicFormatter) Format(text string) string {
	return strings.ToLower(text) // Default formatting to lowercase
}

// Decorator Interface (implicit through embedding):
// Decorators will embed TextFormatter to achieve the decorator pattern

// Concrete Decorator: UpperCaseDecorator
type UpperCaseDecorator struct {
	formatter TextFormatter
}

func (uc *UpperCaseDecorator) Format(text string) string {
	return strings.ToUpper(uc.formatter.Format(text))
}

// Concrete Decorator: PrefixDecorator
type PrefixDecorator struct {
	formatter TextFormatter
	prefix    string
}

func (pf *PrefixDecorator) Format(text string) string {
	return pf.prefix + pf.formatter.Format(text)
}

// Concrete Decorator: SuffixDecorator
type SuffixDecorator struct {
	formatter TextFormatter
	suffix    string
}

func (sf *SuffixDecorator) Format(text string) string {
	return sf.formatter.Format(text) + sf.suffix
}


func main() {
	// Create a basic formatter
	basicFormatter := &BasicFormatter{}

	// Decorate with uppercase
	upperFormatter := &UpperCaseDecorator{formatter: basicFormatter}

	// Decorate with a prefix
	prefixFormatter := &PrefixDecorator{formatter: upperFormatter, prefix: "[PRE] "}

	// Decorate with a suffix
    suffixFormatter := &SuffixDecorator{formatter: prefixFormatter, suffix: " [SUF]"}


	text := "HeLlO, wOrLd!"

	// Format with the decorated formatter
	formattedText := suffixFormatter.Format(text)
	fmt.Println("Formatted Text:", formattedText) // Output: Formatted Text: [PRE] HELLO, WORLD! [SUF]

    //Another decoration
    prefixFormatter2 := &PrefixDecorator{formatter: basicFormatter, prefix: "===>"}
    formattedText2 := prefixFormatter2.Format(text)
    fmt.Println("Formatted Text 2:", formattedText2) // Output: Formatted Text 2: ===>hello, world!

    //Another decoration
    suffixFormatter2 := &SuffixDecorator{formatter: basicFormatter, suffix: "<==="}
    formattedText3 := suffixFormatter2.Format(text)
    fmt.Println("Formatted Text 3:", formattedText3) // Output: Formatted Text 3: hello, world!<===
}
```

### Embedding base decorator
```golang
package main

import (
	"fmt"
)

// Component interface
type Pizza interface {
	Price() float64
	Ingredients() string
}

// ConcreteComponent
type Margherita struct{}

func (p *Margherita) Price() float64 {
	return 8.0
}

func (p *Margherita) Ingredients() string {
	return "Margherita"
}

// Decorator
type PizzaDecorator struct {
	pizza Pizza
}

func (d *PizzaDecorator) Price() float64 {
	return d.pizza.Price()
}

func (d *PizzaDecorator) Ingredients() string {
	return d.pizza.Ingredients()
}

// ConcreteDecorators
type CheeseDecorator struct {
	*PizzaDecorator
}

func NewCheeseDecorator(p Pizza) *CheeseDecorator {
	return &CheeseDecorator{&PizzaDecorator{p}}
}

func (d *CheeseDecorator) Price() float64 {
	return d.PizzaDecorator.Price() + 1.5
}

func (d *CheeseDecorator) Ingredients() string {
	return d.PizzaDecorator.Ingredients() + ", cheese"
}

type OlivesDecorator struct {
	*PizzaDecorator
}

func NewOlivesDecorator(p Pizza) *OlivesDecorator {
	return &OlivesDecorator{&PizzaDecorator{p}}
}

func (d *OlivesDecorator) Price() float64 {
	return d.PizzaDecorator.Price() + 1.0
}

func (d *OlivesDecorator) Ingredients() string {
	return d.PizzaDecorator.Ingredients() + ", olives"
}

type PepperoniDecorator struct {
	*PizzaDecorator
}

func NewPepperoniDecorator(p Pizza) *PepperoniDecorator {
	return &PepperoniDecorator{&PizzaDecorator{p}}
}

func (d *PepperoniDecorator) Price() float64 {
	return d.PizzaDecorator.Price() + 2.0
}

func (d *PepperoniDecorator) Ingredients() string {
	return d.PizzaDecorator.Ingredients() + ", pepperoni"
}

func main() {
	var pizza Pizza = &Margherita{}
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita : 8

	pizza = NewCheeseDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese : 9.5

	pizza = NewOlivesDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese, olives : 10.5

	pizza = NewPepperoniDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese, olives, pepperoni : 12.5
}
```

### Pizza example without embedding
gives more explicit control
avoids inheritance-style behavior

```golang
package main

import (
	"fmt"
)

// Component interface
type Pizza interface {
	Price() float64
	Ingredients() string
}

// ConcreteComponent
type Margherita struct{}

func (p *Margherita) Price() float64 {
	return 8.0
}

func (p *Margherita) Ingredients() string {
	return "Margherita"
}

// ConcreteDecorators (no embedded base)

type CheeseDecorator struct {
	wrapped Pizza
}

func NewCheeseDecorator(p Pizza) *CheeseDecorator {
	return &CheeseDecorator{wrapped: p}
}

func (d *CheeseDecorator) Price() float64 {
	return d.wrapped.Price() + 1.5
}

func (d *CheeseDecorator) Ingredients() string {
	return d.wrapped.Ingredients() + ", cheese"
}

type OlivesDecorator struct {
	wrapped Pizza
}

func NewOlivesDecorator(p Pizza) *OlivesDecorator {
	return &OlivesDecorator{wrapped: p}
}

func (d *OlivesDecorator) Price() float64 {
	return d.wrapped.Price() + 1.0
}

func (d *OlivesDecorator) Ingredients() string {
	return d.wrapped.Ingredients() + ", olives"
}

type PepperoniDecorator struct {
	wrapped Pizza
}

func NewPepperoniDecorator(p Pizza) *PepperoniDecorator {
	return &PepperoniDecorator{wrapped: p}
}

func (d *PepperoniDecorator) Price() float64 {
	return d.wrapped.Price() + 2.0
}

func (d *PepperoniDecorator) Ingredients() string {
	return d.wrapped.Ingredients() + ", pepperoni"
}

func main() {
	var pizza Pizza = &Margherita{}
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita : 8

	pizza = NewCheeseDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese : 9.5

	pizza = NewOlivesDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese, olives : 10.5

	pizza = NewPepperoniDecorator(pizza)
	fmt.Println(pizza.Ingredients(), ":", pizza.Price()) // Margherita, cheese, olives, pepperoni : 12.5
}
```