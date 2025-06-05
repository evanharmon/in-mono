# GOLANG PATTERNS COMMAND

## Resources
- [Refactoring guru command pattern in go](https://refactoring.guru/design-patterns/command/go/example)

## Features
encapsulates a request as an object
- allows parameterization
- allows queue'ing

## Use cases
- GUI applications
- networking
- game dev

## Advantages
- decouples operation (invoker) from action (receiver)
- undo / redo
- queue'ing of commands

## Disadvantages
- complexity
- overhead
- code maintenance

## Components

### Command interface
methods like `Execute()` that all concrete commands must implement

### Concrete commands
specific commands to encapsulate actions

### Invoker
holds a command and triggers it when needed

## Examples

### Calculator
```go
package main

import "fmt"

// Command interface defines the execute method that all commands must implement
type Command interface {
	Execute() int
	Undo() int
}

// Calculator represents the receiver that knows how to perform the operations
type Calculator struct {
	value int
}

// AddCommand represents a concrete command for addition
type AddCommand struct {
	calculator *Calculator
	value      int
}

// SubtractCommand represents a concrete command for subtraction
type SubtractCommand struct {
	calculator *Calculator
	value      int
}

// NewCalculator creates a new calculator instance
func NewCalculator() *Calculator {
	return &Calculator{value: 0}
}

// Execute implements the Command interface for AddCommand
func (c *AddCommand) Execute() int {
	c.calculator.value += c.value
	return c.calculator.value
}

// Undo implements the Command interface for AddCommand
func (c *AddCommand) Undo() int {
	c.calculator.value -= c.value
	return c.calculator.value
}

// Execute implements the Command interface for SubtractCommand
func (c *SubtractCommand) Execute() int {
	c.calculator.value -= c.value
	return c.calculator.value
}

// Undo implements the Command interface for SubtractCommand
func (c *SubtractCommand) Undo() int {
	c.calculator.value += c.value
	return c.calculator.value
}

// Invoker represents the object that knows how to execute commands
type Invoker struct {
	commands []Command
}

// ExecuteCommand executes a command and stores it in history
func (i *Invoker) ExecuteCommand(command Command) int {
	i.commands = append(i.commands, command)
	return command.Execute()
}

// UndoLastCommand undoes the last executed command
func (i *Invoker) UndoLastCommand() int {
	if len(i.commands) == 0 {
		return 0
	}
	lastCommand := i.commands[len(i.commands)-1]
	i.commands = i.commands[:len(i.commands)-1]
	return lastCommand.Undo()
}

func main() {
	// Create a calculator
	calculator := NewCalculator()

	// Create an invoker
	invoker := &Invoker{}

	// Create some commands
	add5 := &AddCommand{calculator: calculator, value: 5}
	add10 := &AddCommand{calculator: calculator, value: 10}
	subtract3 := &SubtractCommand{calculator: calculator, value: 3}

	// Execute commands
	fmt.Println("Executing commands:")
	fmt.Printf("Add 5: %d\n", invoker.ExecuteCommand(add5))
	fmt.Printf("Add 10: %d\n", invoker.ExecuteCommand(add10))
	fmt.Printf("Subtract 3: %d\n", invoker.ExecuteCommand(subtract3))

	// Undo commands
	fmt.Println("\nUndoing commands:")
	fmt.Printf("Undo last command: %d\n", invoker.UndoLastCommand())
	fmt.Printf("Undo last command: %d\n", invoker.UndoLastCommand())
	fmt.Printf("Undo last command: %d\n", invoker.UndoLastCommand())
}
```

### SmartLamp
```go
package main

import "fmt"

// Command interface defines the contract for all commands
type Command interface {
	Execute()
}

// SmartLamp represents a smart home device
type SmartLamp struct {
	name string
}

// NewSmartLamp creates a new SmartLamp instance
func NewSmartLamp(name string) *SmartLamp {
	return &SmartLamp{name: name}
}

// TurnOnCommand represents the command to turn on the lamp
type TurnOnCommand struct {
	lamp *SmartLamp
}

// Execute implements the Command interface for TurnOnCommand
func (c *TurnOnCommand) Execute() {
	fmt.Printf("Turning ON the %s lamp\n", c.lamp.name)
}

// TurnOffCommand represents the command to turn off the lamp
type TurnOffCommand struct {
	lamp *SmartLamp
}

// Execute implements the Command interface for TurnOffCommand
func (c *TurnOffCommand) Execute() {
	fmt.Printf("Turning OFF the %s lamp\n", c.lamp.name)
}

// RemoteControl manages and executes commands
type RemoteControl struct {
	commands []Command
}

// NewRemoteControl creates a new RemoteControl instance
func NewRemoteControl() *RemoteControl {
	return &RemoteControl{
		commands: make([]Command, 0),
	}
}

// AddCommand adds a command to the remote control
func (r *RemoteControl) AddCommand(command Command) {
	r.commands = append(r.commands, command)
}

// RemoveCommand removes the last command from the remote control
func (r *RemoteControl) RemoveCommand() {
	if len(r.commands) > 0 {
		r.commands = r.commands[:len(r.commands)-1]
	}
}

// ExecuteAll executes all commands in sequence
func (r *RemoteControl) ExecuteAll() {
	for _, command := range r.commands {
		command.Execute()
	}
}

func main() {
	// Create a smart lamp
	lamp := NewSmartLamp("Living Room")

	// Create commands for the lamp
	turnOn := &TurnOnCommand{lamp: lamp}
	turnOff := &TurnOffCommand{lamp: lamp}

	// Create a remote control
	remote := NewRemoteControl()

	// Add commands to the remote control
	remote.AddCommand(turnOn)
	remote.AddCommand(turnOff)

	// Execute all commands
	fmt.Println("Executing initial commands:")
	remote.ExecuteAll()

	// Remove the last command (turn off)
	remote.RemoveCommand()

	// Add a new turn on command
	remote.AddCommand(turnOn)

	// Execute the modified sequence
	fmt.Println("\nExecuting modified commands:")
	remote.ExecuteAll()
}
```
