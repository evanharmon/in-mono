# GOLANG JSON MAP STRING INTERFACES

## Features
working with JSON in golang via map[string]interface{}'s

## Limitations
- numbers are by default encoded as `float64`

## Examples

### Map of string interface

```golang
/*
{
  "payload": {
    "item": "shirt",
    "orderType": "air"
  }
}
*/
res := map[string]interface{}{"payload": map[string]interface{}{"item": "shirt", "orderType": "air"}}
```

### Parse JSON to Interface

```golang
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	// Sample JSON response
	jsonResponse := []byte(`{"status": "success", "data": {"id": 123, "name": "Example"}}`)

	// Declare a variable to hold the unmarshalled JSON data
	var result map[string]interface{}

	// Unmarshal the JSON data into the map
	err := json.Unmarshal(jsonResponse, &result)
	if err != nil {
		log.Fatalf("Error unmarshalling JSON: %v", err)
	}

	// Access the nested "data" field
	data, ok := result["data"].(map[string]interface{})
	if !ok {
		log.Fatalf("Error: 'data' field not found or is not an object")
	}

	// Access the "id" field within the "data" field
	id, ok := data["id"].(float64)
	if !ok {
		log.Fatalf("Error: 'id' field not found or is not a number")
	}

	// Print the extracted ID
	fmt.Printf("ID: %v\n", id)
}
```

### Array Of Objects

```golang
/*
{
  "payload": [
    {
      "item": "shirt",
      "orderType": "air"
    }
  ]
}
*/
res := map[string]interface{}{"payload": []map[string]interface{}{map[string]interface{}{"item": "shirt", "orderType": "air"}}}
```
