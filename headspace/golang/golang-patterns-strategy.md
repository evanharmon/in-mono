# GOLANG PATTERNS STRATEGY

## Resources
- [Refactoring guru strategy in go](https://refactoring.guru/design-patterns/strategy/go/example)

## Features
strategy pattern that enables selecting an algorithm at runtime
- encapsulates each as object
- interchangeable
- uses a context to switch between the strategies at runtime

## Use cases
- algorithms
- payment processing integrations
- compression tools
- validations based on rules

## Advantages
- flexible
- separate of concerns
- adherence to Open/Closed principle: add new without affecting old

## Disadvantages
- additional complexity
- overhead
- increased number of classes

## Components

### Strategy
interface defining algorithm methods

### Concrete strategies
the implementations of the strategy interface methods

### Context
holds reference to strategy object and supports switching at runtime

### Client
client code using context to execute algorithms

## Examples

### Payment strategy example
```go
package main

import (
	"fmt"
	"time"
)

// PaymentStrategy defines the interface for payment processing
type PaymentStrategy interface {
	ProcessPayment(amount float64) error
}

// CreditCardStrategy implements PaymentStrategy for credit card payments
type CreditCardStrategy struct {
	cardNumber string
	expiryDate string
	cvv        string
}

func (c *CreditCardStrategy) ProcessPayment(amount float64) error {
	fmt.Printf("Processing credit card payment of $%.2f\n", amount)
	fmt.Printf("Card: %s, Expiry: %s\n", c.cardNumber, c.expiryDate)
	// Simulate processing time
	time.Sleep(1 * time.Second)
	fmt.Println("Credit card payment processed successfully")
	return nil
}

// PayPalStrategy implements PaymentStrategy for PayPal payments
type PayPalStrategy struct {
	email string
}

func (p *PayPalStrategy) ProcessPayment(amount float64) error {
	fmt.Printf("Processing PayPal payment of $%.2f\n", amount)
	fmt.Printf("PayPal email: %s\n", p.email)
	// Simulate processing time
	time.Sleep(1 * time.Second)
	fmt.Println("PayPal payment processed successfully")
	return nil
}

// CryptoStrategy implements PaymentStrategy for cryptocurrency payments
type CryptoStrategy struct {
	walletAddress string
}

func (c *CryptoStrategy) ProcessPayment(amount float64) error {
	fmt.Printf("Processing crypto payment of $%.2f\n", amount)
	fmt.Printf("Wallet address: %s\n", c.walletAddress)
	// Simulate processing time
	time.Sleep(1 * time.Second)
	fmt.Println("Crypto payment processed successfully")
	return nil
}

// PaymentContext holds the current payment strategy and provides methods to change it
type PaymentContext struct {
	strategy PaymentStrategy
}

// NewPaymentContext creates a new PaymentContext with the given strategy
func NewPaymentContext(strategy PaymentStrategy) *PaymentContext {
	return &PaymentContext{
		strategy: strategy,
	}
}

// SetStrategy allows changing the payment strategy at runtime
func (c *PaymentContext) SetStrategy(strategy PaymentStrategy) {
	c.strategy = strategy
}

// ProcessPayment executes the current payment strategy
func (c *PaymentContext) ProcessPayment(amount float64) error {
	return c.strategy.ProcessPayment(amount)
}

func main() {
	// Create payment strategies
	creditCard := &CreditCardStrategy{
		cardNumber: "4111-1111-1111-1111",
		expiryDate: "12/25",
		cvv:        "123",
	}
	
	paypal := &PayPalStrategy{
		email: "user@example.com",
	}
	
	crypto := &CryptoStrategy{
		walletAddress: "0x1234567890abcdef",
	}

	// Create payment context with credit card strategy
	paymentContext := NewPaymentContext(creditCard)

	// Process payment with credit card
	fmt.Println("\nProcessing payment with credit card:")
	paymentContext.ProcessPayment(100.00)

	// Switch to PayPal strategy
	fmt.Println("\nSwitching to PayPal strategy:")
	paymentContext.SetStrategy(paypal)
	paymentContext.ProcessPayment(50.00)

	// Switch to Crypto strategy
	fmt.Println("\nSwitching to Crypto strategy:")
	paymentContext.SetStrategy(crypto)
	paymentContext.ProcessPayment(75.00)
}
```
