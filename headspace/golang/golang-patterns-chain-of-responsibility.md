# GOLANG PATTERNS CHAIN OF RESPONSIBILITY

## Resources
- [Refactoring guru chain of responsibility pattern in go](https://refactoring.guru/design-patterns/chain-of-responsibility/go/example)

## Features
allows a request to pass thru a chain of handlers
- gives multiple objects a chance to process each request

## Use cases
- request handling
- event propagation
- logging and error handling

## Advantages
- flexible
- decouples
- maintainability

## Disadvantages
- performance overhead
- complexity
- unintended handling: if chain not setup correctly

## Components

### Struct of Task / Request / etc
struct with the fields for the task / request to be processed

### Handler interface
common methods for all handlers

### Basehandler
implements the Handler interface
contains the logic to pass the request along
not meant to be used directly as a handler!
- doesn't have to implement `Handle` just `SetNext`, etc.

### Concrete handlers
specific handlers that extend BaseHandler and implement handle
- decides whether to handle request or pass to next handler in chain

## Examples

### HTTP request chain
```go
package main

import (
	"fmt"
)

// Request simulates a basic HTTP request
type Request struct {
	User       string
	AuthToken  string
	Body       string
	IsLoggedIn bool
}

// Handler defines the interface for handling requests
type Handler interface {
	SetNext(handler Handler)
	Handle(req *Request)
}

// BaseHandler implements SetNext and embeds next handler logic
type BaseHandler struct {
	next Handler
}

func (h *BaseHandler) SetNext(next Handler) {
	h.next = next
}

func (h *BaseHandler) CallNext(req *Request) {
	if h.next != nil {
		h.next.Handle(req)
	}
}

// AuthHandler checks if the user is authenticated
type AuthHandler struct {
	BaseHandler
}

func (h *AuthHandler) Handle(req *Request) {
	if req.AuthToken == "valid-token" {
		req.IsLoggedIn = true
		fmt.Println("[Auth] Authentication successful")
		h.CallNext(req)
	} else {
		fmt.Println("[Auth] Authentication failed. Stopping chain.")
	}
}

// LogHandler logs the request
type LogHandler struct {
	BaseHandler
}

func (h *LogHandler) Handle(req *Request) {
	fmt.Printf("[Log] User: %s, Body: %s\n", req.User, req.Body)
	h.CallNext(req)
}

// BusinessLogicHandler performs final action
type BusinessLogicHandler struct {
	BaseHandler
}

func (h *BusinessLogicHandler) Handle(req *Request) {
	if req.IsLoggedIn {
		fmt.Printf("[BusinessLogic] Processing request for user: %s\n", req.User)
	} else {
		fmt.Println("[BusinessLogic] Unauthorized request.")
	}
}

func main() {
	// Create handlers
	auth := &AuthHandler{}
	log := &LogHandler{}
	business := &BusinessLogicHandler{}

	// Chain them: auth -> log -> business logic
	auth.SetNext(log)
	log.SetNext(business)

	// Simulate request
	fmt.Println("=== Valid Request ===")
	req1 := &Request{User: "alice", AuthToken: "valid-token", Body: "Get Data"}
	auth.Handle(req1)

	fmt.Println("\n=== Invalid Request ===")
	req2 := &Request{User: "bob", AuthToken: "invalid", Body: "Delete Data"}
	auth.Handle(req2)
}
```

### Priority
```golang
package main

import (
	"fmt"
	"log"
)

// Request represents a task to be processed
type Request struct {
	Priority int
	Message  string
}

// Handler defines the interface for all handlers
type Handler interface {
	SetNext(Handler)
	Handle(*Request) bool
}

// BaseHandler provides basic implementation of the Handler interface
type BaseHandler struct {
	next Handler
}

// SetNext sets the next handler in the chain
func (h *BaseHandler) SetNext(next Handler) {
	h.next = next
}

// BasicHandler handles low priority requests
type BasicHandler struct {
	BaseHandler
}

// Handle processes low priority requests
func (h *BasicHandler) Handle(r *Request) bool {
	if r.Priority < 5 {
		fmt.Printf("BasicHandler: Processing low priority request: %s\n", r.Message)
		return true
	}
	if h.next != nil {
		return h.next.Handle(r)
	}
	return false
}

// AdvancedHandler handles high priority requests
type AdvancedHandler struct {
	BaseHandler
}

// Handle processes high priority requests
func (h *AdvancedHandler) Handle(r *Request) bool {
	if r.Priority >= 5 {
		fmt.Printf("AdvancedHandler: Processing high priority request: %s\n", r.Message)
		return true
	}
	if h.next != nil {
		return h.next.Handle(r)
	}
	return false
}

func main() {
	// Create handlers
	basic := &BasicHandler{}
	advanced := &AdvancedHandler{}

	// Set up the chain
	basic.SetNext(advanced)

	// Create some test requests
	requests := []Request{
		{Priority: 3, Message: "Low priority task"},
		{Priority: 7, Message: "High priority task"},
		{Priority: 1, Message: "Very low priority task"},
		{Priority: 9, Message: "Critical priority task"},
	}

	// Process each request
	for _, req := range requests {
		if !basic.Handle(&req) {
			log.Printf("No handler could process request: %s\n", req.Message)
		}
	}
}
```
