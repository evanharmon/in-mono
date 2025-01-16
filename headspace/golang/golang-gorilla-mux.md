# GOLANG GORILLA MUX

## Resources
- [Gorilla mux](https://pkg.go.dev/github.com/gorilla/mux)

## Get route variables for a request
```golang
func main() {
    // Create a new router instance
    router := mux.NewRouter()

    // Define a route with variable parameters
    router.HandleFunc("/user/{name}", func(w http.ResponseWriter, r *http.Request) {
        // Extract the name parameter from the request
        vars := mux.Vars(r)
        fmt.Fprintf(w, "Hello, %s!", vars["name"])
```

## Parse request body in to a type

```golang
// Define a type to hold the parsed data from the request body
type User struct {
    Name  string `json:"name"`
    Age   int    `json:"age"`
}

func main() {
    // Create a new router instance
    router := mux.NewRouter()

    // Define a route with a POST handler that parses the request body
    router.HandleFunc("/user", func(w http.ResponseWriter, r *http.Request) {
        var user User
        // Decode JSON data from the request body into the user struct
        if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
            http.Error(w, "Invalid JSON format", http.StatusBadRequest)
            return
        }

        fmt.Printf("Received user: %+v\n", user)
    })

    // Start the HTTP server on port 8080
    fmt.Println("Starting server at port 8080...")
    http.ListenAndServe(":8080", router)
}
```