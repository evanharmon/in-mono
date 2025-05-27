# GOLANG PATTERNS OBSERVER

## Resources
- [Refactoring guru observer in go](https://refactoring.guru/design-patterns/observer/go/example)

## Features
one-to-many relationships between objects.
- subject can notify other observers about changes in state

## Use cases
- event handling
- pub sub systems
- model-view-controller (MVC)
- monitoring systems

## Advantages
- loose coupling
- scalable

## Disadvantages
- potential unexpected updates
- ordering issues around which observers are notified
- potential memory leaks when not properly unregistered
- complexity

## Components

### Observer interface
methods that all observers must implement

### Concerte observers
structs implementing Observer interface
will be notified of changes in subject

### Subject interface
methods to register, unregister, and notify observers

### Concrete subjects
structs to maintain a list of observers
implements Subject interface methods

## Examples

### Security system
```go
package main

import "fmt"

// Define the Observer interface
type Observer interface {
	Update(event string)
}

// Define the Subject interface
type Subject interface {
	Attach(o Observer)
	Detach(o Observer)
	Notify()
}

// Concrete Observer: DoorSensor
type DoorSensor struct {
	name string
}

func (d *DoorSensor) Update(event string) {
	fmt.Printf("DoorSensor: %s detected event: %s\n", d.name, event)
}

// Concrete Observer: WindowSensor
type WindowSensor struct {
	name string
}

func (w *WindowSensor) Update(event string) {
	fmt.Printf("WindowSensor: %s detected event: %s\n", w.name, event)
}

// Concrete Observer: Alarm
type Alarm struct {
	name string
}

func (a *Alarm) Update(event string) {
	fmt.Printf("Alarm: %s triggered due to event: %s\n", a.name, event)
}

// Concrete Subject: SecuritySystem
type SecuritySystem struct {
	observers []Observer
}

func (s *SecuritySystem) Attach(o Observer) {
	s.observers = append(s.observers, o)
}

func (s *SecuritySystem) Detach(o Observer) {
	for i, observer := range s.observers {
		if observer == o {
			s.observers = append(s.observers[:i], s.observers[i+1:]...)
			return
		}
	}
}

func (s *SecuritySystem) Notify(event string) {
	for _, observer := range s.observers {
		observer.Update(event)
	}
}

func main() {
	// Create a SecuritySystem
	securitySystem := &SecuritySystem{}

	// Create concrete observers
	doorSensor := &DoorSensor{name: "Front Door"}
	windowSensor := &WindowSensor{name: "Living Room Window"}
	alarm := &Alarm{name: "Main Alarm"}

	// Attach observers to the SecuritySystem
	securitySystem.Attach(doorSensor)
	securitySystem.Attach(windowSensor)
	securitySystem.Attach(alarm)

	// Simulate a door opening
	fmt.Println("Simulating a door opening...")
	securitySystem.Notify("Door Opening")

	// Simulate a window opening
	fmt.Println("\nSimulating a window opening...")
	securitySystem.Notify("Window Opening")

	// Detach the window sensor
	fmt.Println("\nDetaching the WindowSensor...")
	securitySystem.Detach(windowSensor)

	// Simulate a window opening again (WindowSensor should not be notified)
	fmt.Println("\nSimulating a window opening after detaching WindowSensor...")
	securitySystem.Notify("Window Opening")
}
```

### Weather
```go
package main

import (
	"fmt"
	"sync"
)

// Observer defines the interface for all observers
type Observer interface {
	Update(temperature, humidity, pressure float64)
}

// Subject defines the interface for the subject
type Subject interface {
	Register(observer Observer)
	Unregister(observer Observer)
	Notify()
}

// WeatherData represents the subject that holds weather measurements
type WeatherData struct {
	observers   []Observer
	temperature float64
	humidity    float64
	pressure    float64
	mu          sync.Mutex
}

// NewWeatherData creates a new WeatherData instance
func NewWeatherData() *WeatherData {
	return &WeatherData{
		observers: make([]Observer, 0),
	}
}

// Register adds a new observer
func (w *WeatherData) Register(observer Observer) {
	w.mu.Lock()
	defer w.mu.Unlock()
	w.observers = append(w.observers, observer)
}

// Unregister removes an observer
func (w *WeatherData) Unregister(observer Observer) {
	w.mu.Lock()
	defer w.mu.Unlock()
	for i, obs := range w.observers {
		if obs == observer {
			w.observers = append(w.observers[:i], w.observers[i+1:]...)
			break
		}
	}
}

// Notify notifies all observers of changes
func (w *WeatherData) Notify() {
	w.mu.Lock()
	defer w.mu.Unlock()
	for _, observer := range w.observers {
		observer.Update(w.temperature, w.humidity, w.pressure)
	}
}

// SetMeasurements updates the weather measurements and notifies observers
func (w *WeatherData) SetMeasurements(temperature, humidity, pressure float64) {
	w.mu.Lock()
	w.temperature = temperature
	w.humidity = humidity
	w.pressure = pressure
	w.mu.Unlock()
	w.Notify()
}

// CurrentConditionsDisplay represents a concrete observer
type CurrentConditionsDisplay struct {
	temperature float64
	humidity    float64
	pressure    float64
}

// Update implements the Observer interface
func (c *CurrentConditionsDisplay) Update(temperature, humidity, pressure float64) {
	c.temperature = temperature
	c.humidity = humidity
	c.pressure = pressure
	c.Display()
}

// Display shows the current conditions
func (c *CurrentConditionsDisplay) Display() {
	fmt.Printf("Current conditions: %.1f°F, %.1f%% humidity, %.1f pressure\n",
		c.temperature, c.humidity, c.pressure)
}

// StatisticsDisplay represents another concrete observer
type StatisticsDisplay struct {
	temperatures []float64
	humidities   []float64
	pressures    []float64
}

// Update implements the Observer interface
func (s *StatisticsDisplay) Update(temperature, humidity, pressure float64) {
	s.temperatures = append(s.temperatures, temperature)
	s.humidities = append(s.humidities, humidity)
	s.pressures = append(s.pressures, pressure)
	s.Display()
}

// Display shows the statistics
func (s *StatisticsDisplay) Display() {
	if len(s.temperatures) == 0 {
		return
	}

	// Calculate averages
	var tempSum, humiditySum, pressureSum float64
	for i := range s.temperatures {
		tempSum += s.temperatures[i]
		humiditySum += s.humidities[i]
		pressureSum += s.pressures[i]
	}

	count := float64(len(s.temperatures))
	fmt.Printf("Statistics: Avg temp %.1f°F, Avg humidity %.1f%%, Avg pressure %.1f\n",
		tempSum/count, humiditySum/count, pressureSum/count)
}

func main() {
	// Create the weather station
	weatherData := NewWeatherData()

	// Create displays
	currentDisplay := &CurrentConditionsDisplay{}
	statsDisplay := &StatisticsDisplay{}

	// Register displays as observers
	weatherData.Register(currentDisplay)
	weatherData.Register(statsDisplay)

	// Simulate weather changes
	fmt.Println("Weather Station Simulation:")
	fmt.Println("---------------------------")
	
	weatherData.SetMeasurements(80, 65, 30.4)
	weatherData.SetMeasurements(82, 70, 29.2)
	weatherData.SetMeasurements(78, 90, 29.2)

	// Unregister one observer
	weatherData.Unregister(statsDisplay)
	
	// One more measurement
	weatherData.SetMeasurements(75, 85, 30.1)
}
```
