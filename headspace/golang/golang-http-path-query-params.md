# GOLANG HTTP PATH AND QUERY PARAMS

## Features
path and query params with go's http library

## Examples

### Generate path parameter and make GET request
```golang
package main

import (
    "fmt"
    "net/http"
    "io"
    "log"
)

// Base URL for the API
const baseURL = "https://api.example.com"

func fetchPostByID(postID int) {
    url := fmt.Sprintf("%s/posts/%d", baseURL, postID)

    resp, err := http.Get(url)
    if err != nil {
        log.Fatalf("Error fetching posts for path parameter: %v", err)
    }
    // always defer and close the response!
    defer resp.Body.Close()

    if resp.StatusCode == http.StatusOK {
        data, _ := io.ReadAll(resp.Body)
        fmt.Printf("Post: %s\n", data)
    } else {
        log.Printf("Failed to fetch post. Received Status Code: %d", resp.StatusCode)
    }
}

func main() {
    fetchPostByID(3)
}
```

### Multiple query params
```go
package main

import (
    "fmt"
    "net/http"
    "io"
    "log"
)

// Base URL for the API
const baseURL = "https://api.example.com"

func fetchFilteredPosts(published, titlePrefix string) {
    url := fmt.Sprintf("%s/posts?published=%s&title=%s", baseURL, published, titlePrefix)

    resp, err := http.Get(url)
    if err != nil {
        log.Fatalf("Error fetching posts with multiple query parameters: %v", err)
    }

    if resp.StatusCode == http.StatusOK {
        data, _ := io.ReadAll(resp.Body)
        fmt.Printf("Filtered Posts: %s\n", data)
    } else {
        log.Printf("Failed to fetch posts. Status Code: %d", resp.StatusCode)
    }
}

func main() {
    fetchFilteredPosts("true", "c") 
}
```
