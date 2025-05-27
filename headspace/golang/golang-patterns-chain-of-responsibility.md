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

### Handler interface
common methods for all handlers

### Basehandler
implements the Handler interface
contains the logic to pass the request along

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
