# GOLANG HTTP REQUEST

## Features
http requests with http.NewRequest()
- supports other methods like `put`, `patch`, `delete`

## Post examples

### Simple post with jsonBody as string
```golang
package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	url := "https://httpbin.org/post"
	jsonBody := `{
		"name": "John Doe",
		"age": 30,
		"city": "New York"
	}`

	req, err := http.NewRequest(http.MethodPost, url, bytes.NewBufferString(jsonBody))
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response: %v", err)
	}

	fmt.Println("Response Status:", resp.Status)
	fmt.Println("Response Body:", string(body))
}
```

### Simple post with json interface
```golang
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	url := "https://httpbin.org/post"

	jsonData := map[string]interface{}{
		"name":  "John Doe",
		"age":   30,
		"city": "New York",
	}

	jsonBytes, err := json.Marshal(jsonData)
	if err != nil {
		log.Fatalf("Error marshaling JSON: %v", err)
	}

  req, err := http.NewRequest(http.MethodPost, url, bytes.NewBuffer(jsonBytes))
  if err != nil {
      log.Fatalf("Error creating request: %v", err)
  }

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response: %v", err)
	}

	fmt.Println("Response Status:", resp.Status)
	fmt.Println("Response Body:", string(body))
}
```

### Couchbase post with payload
```golang
package main

import (
"fmt"
"strings"
"net/http"
"io/ioutil"
)

func main() {
  url := "https://localhost:4984/sync_gateway/_changes"

  payload := strings.NewReader("{\n\t\"include_docs\": false,\n\t\"filter\": \"sync_gateway/bychannel\",\n\t\"channels\": \"example\",\n\t\"limit\": 50\n}")

  req, _ := http.NewRequest("POST", url, payload)

  req.Header.Add("content-type", "application/json")
  req.Header.Add("cache-control", "no-cache")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(res)
  fmt.Println(string(body))
}
```

## Put examples

### Update a task with json string
```golang
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

const baseURL = "https://httpbin.org/put"

func updateTask(taskID int) {
    updatedTask := `{
        "title": "Complete project milestone", 
        "done": true, 
        "description": "Finish documentation and submit for review."
    }`

    // Use only baseURL to get a mirror response
    request, err := http.NewRequest(http.MethodPut, baseURL, bytes.NewBufferString(updatedTask))
    // request, err := http.NewRequest(http.MethodPut, baseURL+"/tasks/"+fmt.Sprint(taskID), bytes.NewBufferString(updatedTask))
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }
    request.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    response, err := client.Do(request)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }

    if response.StatusCode == http.StatusOK {
        body, err := io.ReadAll(response.Body)
				if err != nil {
						fmt.Println("Error reading response:", err)
						return
				}
        fmt.Println("Task updated successfully!")
        fmt.Println(string(body))
    } else {
        // Handle errors
        fmt.Println("Error updating the task")
        fmt.Printf("Status Code: %d\n", response.StatusCode)
        body, err := io.ReadAll(response.Body)
				if err != nil {
						fmt.Println("Error reading response:", err)
						return
				}
        fmt.Println("Error Details:", string(body))
    }
}

func main() {
  updateTask(3)
}
```

## Patch examples

### Update a task with json string
```golang
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

const baseURL = "https://httpbin.org/patch"

func updateTask(taskID int) {
    updatedTask := `{
        "done": false
    }`

    // Use only baseURL to get a mirror response
    request, err := http.NewRequest(http.MethodPatch, baseURL, bytes.NewBufferString(updatedTask))
    // request, err := http.NewRequest(http.MethodPatch, baseURL+"/tasks/"+fmt.Sprint(taskID), bytes.NewBufferString(updatedTask))
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }
    request.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    response, err := client.Do(request)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }

    if response.StatusCode == http.StatusOK {
        body, err := io.ReadAll(response.Body)
				if err != nil {
						fmt.Println("Error reading response:", err)
						return
				}
        fmt.Println("Task updated successfully!")
        fmt.Println(string(body))
    } else {
        // Handle errors
        fmt.Println("Error updating the task")
        fmt.Printf("Status Code: %d\n", response.StatusCode)
        body, err := io.ReadAll(response.Body)
				if err != nil {
						fmt.Println("Error reading response:", err)
						return
				}
        fmt.Println("Error Details:", string(body))
    }
}

func main() {
  updateTask(3)
}
```

## Delete examples

### Delete a task
```golang
package main

import (
	"fmt"
	"io"
	"net/http"
)

const baseURL = "https://httpbin.org/delete"

func deleteTask(taskID int) {
    // Use only baseURL to get a mirror response
		// NOTE: httpbin will actually send a 200 response with a body so it'll log as an error
    request, err := http.NewRequest(http.MethodDelete, baseURL, nil)
    // request, err := http.NewRequest(http.MethodDelete, baseURL+"/tasks/"+fmt.Sprint(taskID), nil)
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }

    client := &http.Client{}
    response, err := client.Do(request)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }

    if response.StatusCode == http.StatusNoContent {
        fmt.Println("Task deleted successfully!")
    } else {
        // Handle errors
        fmt.Println("Error deleting the task")
        fmt.Printf("Status Code: %d\n", response.StatusCode)
        body, err := io.ReadAll(response.Body)
				if err != nil {
						fmt.Println("Error reading response:", err)
						return
				}
        fmt.Println("Error Details:", string(body))
    }
}

func main() {
    deleteTask(3)
}
```

## Recipes

### Recalculate Content Length

```golang
b, err := io.Copy(ioutil.Discard, req.Body)
```

### Print Request Body For Debugging

```golang
// Save a copy of this request for debugging.
requestDump, err := httputil.DumpRequest(req, true)
if err != nil {
  fmt.Println(err)
}
fmt.Println(string(requestDump))
```

### Get a form field

```golang
r.ParseForm()
id := r.Form["id"]
```
