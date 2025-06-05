# GOLANG PATTERNS ADAPTER

## Resources
- [Golang adapter pattern medium article](https://medium.com/@josueparra2892/adapter-pattern-in-go-d77e08abd526)

## Feature
structural pattern to integrate classes with incompatible interfaces
- converts interface of a class to another interface client expects

## Use cases
- legacy code integration
- third-party libraries
- multiple vendors

## Advantages
- promotes reusability
- increases flexibility
- simple to implement

## Disadvantages
- extra layer of abstraction
- additional complexity
- maintenance overhead

## Components

### Existing interface
existing interface with required methods declared

### Existing structs
Existing concrete structs with methods

### New interface
new interface with new methods to be implemented

### New Adapter
new adapter struct with implemented methods for the new interface

## Examples

### Payment processor and legacy

```golang
package main

import "fmt"

// Target interface that our client code expects
type PaymentProcessor interface {
	ProcessPayment(amount float64) error
}

// Adaptee - existing payment system with incompatible interface
type LegacyPaymentSystem struct{}

func (l *LegacyPaymentSystem) Pay(amount float64, currency string) error {
	fmt.Printf("Processing payment of %.2f %s using legacy system\n", amount, currency)
	return nil
}

// Adapter - adapts the legacy system to the new interface
type PaymentAdapter struct {
	legacySystem *LegacyPaymentSystem
}

func NewPaymentAdapter(legacySystem *LegacyPaymentSystem) *PaymentAdapter {
	return &PaymentAdapter{
		legacySystem: legacySystem,
	}
}

// Implements the Target interface
func (p *PaymentAdapter) ProcessPayment(amount float64) error {
	// Adapt the call to the legacy system's interface
	return p.legacySystem.Pay(amount, "USD")
}

// Client code that uses the Target interface
func processPayment(processor PaymentProcessor, amount float64) error {
	return processor.ProcessPayment(amount)
}

func main() {
	// Create the legacy system
	legacySystem := &LegacyPaymentSystem{}

	// Create the adapter
	adapter := NewPaymentAdapter(legacySystem)

	// Use the adapter through the Target interface
	err := processPayment(adapter, 100.50)
	if err != nil {
		fmt.Printf("Error processing payment: %v\n", err)
	}
} 
```

### New home device
```golang
package main

import "fmt"

// OldDevice represents the legacy interface
type OldDevice struct{}

// SwitchOn is the old method name
func (d *OldDevice) SwitchOn() {
	fmt.Println("Switching on the old device...")
}

// NewDevice represents the new interface we want to use
type NewDevice interface {
	TurnOn()
}

// DeviceAdapter adapts OldDevice to the NewDevice interface
type DeviceAdapter struct {
	oldDevice *OldDevice
}

// NewDeviceAdapter creates a new adapter
func NewDeviceAdapter(oldDevice *OldDevice) *DeviceAdapter {
	return &DeviceAdapter{
		oldDevice: oldDevice,
	}
}

// TurnOn implements the NewDevice interface by calling the old SwitchOn method
func (a *DeviceAdapter) TurnOn() {
	a.oldDevice.SwitchOn()
}

func main() {
	// Create an instance of the old device
	oldDevice := &OldDevice{}

	// Create an adapter for the old device
	adapter := NewDeviceAdapter(oldDevice)

	// Use the new interface
	adapter.TurnOn()
}
```
