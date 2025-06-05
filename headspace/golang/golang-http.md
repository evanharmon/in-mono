# GOLANG HTTP

## Resources

- [Multiple HTTP Servers](https://medium.com/rungo/running-multiple-http-servers-in-go-d15300f4e59f)

## Features
http requests and responses with basic net/http package

## Response code checks in golang
wrappers to check for multiple codes

- get: use `http.StatusOk` for checks
- post: use `http.StatusCreated` for checks

### Check Response Codes
explicit code checks
avoid `suspect or` by using two separate ifs

```golang
if resp.StatusCode < 200 {
  return nil, fmt.Errorf("HTTP Response error status: %d\n", resp.StatusCode)
}

if resp.StatusCode > 201 {
  return nil, fmt.Errorf("HTTP Response error status: %d\n", resp.StatusCode)
}
```

## Get requests

### Simple get
```golang
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	url := "https://httpbin.org/get"

	resp, err := http.Get(url)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error during GET request: %v\n", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Fprintf(os.Stderr, "Non-OK HTTP status: %v\n", resp.Status)
		os.Exit(1)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading response body: %v\n", err)
		os.Exit(1)
	}

  fmt.Println("Response body:")
	fmt.Println(string(body))
}
```

## Post requests

### Simple post
```golang
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func main() {
	url := "https://httpbin.org/post"
	jsonPayload := strings.NewReader(`{
		"message": "Hello World",
		"number": 42,
		"isTest": true
	}`)

	resp, err := http.Post(url, "application/json", jsonPayload)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error during POST request: %v\n", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Fprintf(os.Stderr, "Non-OK HTTP status: %v\n", resp.Status)
		os.Exit(1)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading response body: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("Response body:")
	fmt.Println(string(body))
}
```

## Mock HTTP Request

package is `net/http/httptest`

```golang
ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte(`desired response here`))
}))
defer ts.Close()
apiURL = ts.URL

myfunction(apiURL)
```
