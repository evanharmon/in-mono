# GOLANG PATTERNS SINGLETON

## Features
provide a singleton for re-use

## Use cases
- config management
- logging
- thread pool management
- caching
- db connections
- file system access

## Disadvantages
- overuse can cause `global state` bloat which is an anti-pattern
- still susceptible to concurrency issues depending on implementation
- creates hidden dependency between classes

## Examples

### Singleton logger using `sync.Once`
ensures a singleton even in a concurrent environment
```golang
package main

import (
	"fmt"
	"log"
	"os"
	"sync"
)

// Logger is a struct that wraps the standard log.Logger.
type Logger struct {
	*log.Logger
}

// package level variables
var (
	logger *Logger
	once   sync.Once
)

// GetLogger returns the singleton instance of the logger.
// It uses sync.Once to ensure that the logger is only initialized once.
func GetLogger() *Logger {
	once.Do(func() {
		logger = &Logger{
			Logger: log.New(os.Stdout, "INFO: ", log.Ldate|log.Ltime),
		}
	})
	return logger
}

func main() {
	// Get the logger instance.
	log := GetLogger()

	// Log some messages.
	log.Println("Application started")
	log.Printf("Processing request %d", 123)

	// Get the logger instance again (should be the same instance).
	log2 := GetLogger()

	// Check if the instances are the same.
	if log == log2 {
		fmt.Println("Both logger instances are the same (singleton)")
	} else {
		fmt.Println("Logger instances are different")
	}

	log2.Println("Application finished")
}
```
