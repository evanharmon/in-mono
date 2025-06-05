# GOLANG JSON

## Resources
- [Online JSON to Go Generator](https://mholt.github.io/json-to-go/)
- [JSON Code Generator Online Tool](https://app.quicktype.io/)
- [Dyamic JSON in Go](https://eagain.net/articles/go-dynamic-json/)
- [Convert JSON-to-Go](https://mholt.github.io/json-to-go/)
- [SO string escaped JSON](https://stackoverflow.com/questions/16846553/how-to-unmarshal-an-escaped-json-string-in-go/38684420)
- [String Escaped JSON Go Playground](http://play.golang.org/p/id4f4r9tEr)

## Features
working with JSON in golang
- use `%+v` with fmt to print out field names
- serialize with `json.Marshal()` or `json.MarshalIndent()`
- deserialize with `json.UnMarshal()`

## Best practices
- always use a pointer for optional fields

## Limitations
- numbers are by default encoded as `float64`

## Example

### Person: Serialize and Deserializing JSON
```golang
package main

import (
	"encoding/json"
	"fmt"
)

// Person represents a person with their details
type Person struct {
	Name    string   `json:"name"`
	Age     int      `json:"age"`
	Email   string   `json:"email"`
	Address Address  `json:"address"`
	Hobbies []string `json:"hobbies"`
}

// Address represents a person's address
type Address struct {
	Street  string `json:"street"`
	City    string `json:"city"`
	State   string `json:"state"`
	ZipCode string `json:"zipCode"`
}

func main() {
	// Create a sample person with nested data
	person := Person{
		Name:  "John Doe",
		Age:   30,
		Email: "john@example.com",
		Address: Address{
			Street:  "123 Main St",
			City:    "Anytown",
			State:   "CA",
			ZipCode: "12345",
		},
		Hobbies: []string{"reading", "hiking", "coding"},
	}

	// Serialize to JSON
	jsonData, err := json.MarshalIndent(person, "", "  ")
	if err != nil {
		fmt.Printf("Error marshaling JSON: %v\n", err)
		return
	}

	fmt.Println("Serialized JSON:")
	fmt.Println(string(jsonData))

	// Deserialize from JSON
	var newPerson Person
	err = json.Unmarshal(jsonData, &newPerson)
	if err != nil {
		fmt.Printf("Error unmarshaling JSON: %v\n", err)
		return
	}

	fmt.Println("\nDeserialized Person:")
	fmt.Printf("Name: %s\n", newPerson.Name)
	fmt.Printf("Age: %d\n", newPerson.Age)
	fmt.Printf("Email: %s\n", newPerson.Email)
	fmt.Printf("Address: %s, %s, %s %s\n",
		newPerson.Address.Street,
		newPerson.Address.City,
		newPerson.Address.State,
		newPerson.Address.ZipCode)
	fmt.Printf("Hobbies: %v\n", newPerson.Hobbies)
} 
```

### Use pointers on omitempty and check for missing vs empty value
```golang
package main

import (
	"encoding/json"
	"fmt"
)

type Address struct {
	Street *string `json:"street,omitempty"`
	City   *string `json:"city,omitempty"`
	Zip    *int    `json:"zip,omitempty"`
}

type Person struct {
	Name    string   `json:"name"`
	Age     *int     `json:"age,omitempty"`
	Address *Address `json:"address,omitempty"`
}

func main() {
	jsonStr := `
  {
   "name": "John Doe",
   "address": {
    "city": "Anytown",
    "zip": 12345
   }
  }
  `

	var person Person
	err := json.Unmarshal([]byte(jsonStr), &person)
	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return
	}

	fmt.Println("Name:", person.Name)

	if person.Age != nil {
		fmt.Println("Age:", *person.Age)
	} else {
		fmt.Println("Age: Not provided")
	}

	if person.Address != nil {
		if person.Address.Street != nil {
			fmt.Println("Street:", *person.Address.Street)
		} else {
			fmt.Println("Street: Not provided")
		}
		if person.Address.City != nil {
			fmt.Println("City:", *person.Address.City)
		} else {
			fmt.Println("City: Not provided")
		}
		if person.Address.Zip != nil {
			fmt.Println("Zip:", *person.Address.Zip)
		} else {
			fmt.Println("Zip: Not provided")
		}
	} else {
		fmt.Println("Address: Not provided")
	}
}

```

## Recipes

### Omit Field If Empty

```golang
type Response2 struct {
    Page   int      `json:"page,omitempty"`
    Fruits []string `json:"fruits"`
}
```

### Marshal String Escaped JSON
use `strconv.Unquote()` first

### Interpolate String

```golang
var payload = []byte(fmt.Sprintf(`{"foo":%q, "hello":%q}`, val1, val2))
```

### sending a JSON request
```golang
func sendJSONRequest(jsonData []byte) error {
    req, err := http.NewRequest(http.MethodPost, "http://localhost:8000/posts", bytes.NewBuffer(jsonData))
    if err != nil {
        return err
    }

    // Set the content type to application/json
    req.Header.Set("Content-Type", "application/json")

    // Send the HTTP request
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()

    // Print the HTTP response status
    log.Printf("HTTP response status: %s", resp.Status)
    return nil
}
```

### Tasks example of serialize and deserialize with request
```golang
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Task struct {
    Title       string `json:"title"`
    Done        bool   `json:"done"`
    Description string `json:"description"`
}

func fetchTasks(url string) ([]byte, error) {
    response, err := http.Get(url)
    if err != nil {
        return nil, fmt.Errorf("request to %s failed: %w", url, err)
    }
    defer response.Body.Close()

    if response.StatusCode != http.StatusOK {
        return nil, fmt.Errorf("request failed with status: %s", response.Status)
    }

    body, err := io.ReadAll(response.Body)
    if err != nil {
        return nil, fmt.Errorf("failed to read response body: %w", err)
    }
    return body, nil
}

func parseTasks(data []byte) ([]Task, error) {
    var tasks []Task
    err := json.Unmarshal(data, &tasks)
    if err != nil {
        return nil, fmt.Errorf("JSON decoding failed: %w", err)
    }
    return tasks, nil
}

func printTasks(tasks []Task) {
    fmt.Println("Decoded task items from JSON:")
    for _, task := range tasks {
        fmt.Println("Title: ", task.Title)
        fmt.Println("Done: ", task.Done)
        fmt.Println("Description: ", task.Description)
        fmt.Println("-----------------------------")
    }
}

func main() {
    url := "http://localhost:8000/tasks"
    body, err := fetchTasks(url)
    if err != nil {
        fmt.Println(err)
        return
    }

    tasks, err := parseTasks(body)
    if err != nil {
        fmt.Println(err)
        return
    }

    printTasks(tasks)
}
```

### Tasks with omitempty and request
```golang
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type GetTasks struct {
	Description string            `json:"description"`
	QueryParams map[string]string `json:"query_params"`
	Responses   map[string]string `json:"responses"`
}

type APIDocs struct {
	Tasks map[string]GetTasks `json:"/tasks"`
}

func fetchAPIDocs(url string) ([]byte, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("HTTP request failed: %w", err)
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code: %d", res.StatusCode)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}
	return body, nil
}

func parseAPIDocs(data []byte) (APIDocs, error) {
	var decodedData APIDocs
	err := json.Unmarshal(data, &decodedData)
	if err != nil {
		return APIDocs{}, fmt.Errorf("failed to decode JSON: %w", err)
	}
	return decodedData, nil
}

func printGetTasksInfo(docs APIDocs) {
	if getTasks, exists := docs.Tasks["GET"]; exists {
		fmt.Printf("Description of 'GET' on '/tasks': %s\n", getTasks.Description)
		if pageParam, exists := getTasks.QueryParams["page"]; exists {
			fmt.Printf("'page' query parameter in '/tasks' API: %s\n", pageParam)
		} else {
			fmt.Println("'page' query parameter in '/tasks' API: not found")
		}
	} else {
		fmt.Println("Description of 'GET' on '/tasks': not found")
	}
}

func main() {
	url := "http://localhost:8000/docs"
	body, err := fetchAPIDocs(url)
	if err != nil {
		panic(err.Error())
	}

	docs, err := parseAPIDocs(body)
	if err != nil {
		panic(err.Error())
	}

	printGetTasksInfo(docs)
}
```
