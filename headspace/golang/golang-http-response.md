# GOLANG HTTP RESPONSE

## Features
http response handling with basic net/http package

## Check response codes
untested but you get the gist.
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
    log.Fatalf("Failed to get %v", url)
  }
  defer resp.Body.Close()

  // common response code checks
  if resp.StatusCode == http.StatusOK {
    body, err := io.ReadAll(resp.Body)
    if err != nil {
      log.Fatalf("Failed to read response body: %v", err)
    }

    fmt.Println("Response received:")
    fmt.Println(string(body))
  } else if resp.StatusCode == http.StatusBadRequest {
    fmt.Println("Unauthorized response received.")
    body, err := io.ReadAll(resp.Body)
    if err != nil {
      log.Fatalf("Failed to read StatusBadRequest body: %v", err)
    }
    fmt.Printf("Unauthorized details: %s\n", body)
  } else if resp.StatusCode == http.StatusNotFound {
    fmt.Println("URL not found.")
    body, err := io.ReadAll(resp.Body)
    if err != nil {
      log.Fatalf("Failed to read StatusNotFound body: %v", err)
    }
    fmt.Printf("StatusNotFound details: %s\n", body)
  } else if resp.StatusCode == http.StatusInternalServerError {
    fmt.Println("Internal server error.")
    body, err := io.ReadAll(resp.Body)
    if err != nil {
      log.Fatalf("Failed to read StatusInternalServerError body: %v", err)
    }
    fmt.Printf("StatusInternalServerError details: %s\n", body)
  } else {
  // fallthrough for other codes
    fmt.Printf("Unexpected status code: %d\n", resp.StatusCode)
    body, err := io.ReadAll(resp.Body)
    if err != nil {
      log.Fatalf("Failed to read unexpected status code body: %v", err)
    }
    fmt.Printf("Unexpected status code details: %s\n", body)
  }
}
```

## Recipes

### Dump Response For Debugging

```golang
requestDump, err := httputil.DumpRequest(req, true)
if err != nil {
  fmt.Println(err)
}
fmt.Println(string(requestDump))
```

## Gotchas

### Runtime Error: Invalid Memory Address Or Nil Pointer Dereference

[SO](https://stackoverflow.com/questions/16280176/go-panic-runtime-error-invalid-memory-address-or-nil-pointer-dereference)
defer res.Body.Close() needs to come AFTER error checking

```golang
res, err := client.Do(req)

if err != nil {
    return nil, err
}
defer res.Body.Close()
```
