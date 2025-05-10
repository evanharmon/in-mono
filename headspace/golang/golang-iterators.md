# GOLANG ITERATORS

## Resources

- [Golang for loops examples](https://gobyexample.com/for)

## Features
loops in golang
- for loop variants are supported

## For loops

### For Range

```golang
for _, e := range os.Environ() {
    pair := strings.Split(e, "=")
    fmt.Println(pair[0])
}
```

## While style loops

## Simple while loop using `for`
```go
i := 0
for i < 5 {
		fmt.Println(i)
		i++
}
```

### While loop conditional check function
```go
func checkTrue(i int) bool {
    return i < 5
}

func main() {
    i := 0
    for checkTrue(i) {
        fmt.Println(i)
        i++
    }
}
```

## Recipes

### Iterating Array Of Strings

must reference both return variables from `for ... range`. First variable
returned is of type int (index)

```golang
envs := []string{"GOOGLE_PROJECT_ID", "GOOGLE_APPLICATION_CREDENTIALS"}
for _, v := envs {
	// additional code here
}
```

### Break Out Of For Loop

```golang
for {
		fmt.Println("loop")
		break
}
```

### Break But Continue For Loop

```golang
for n := 0; n <= 5; n++ {
	if n%2 == 0 {
		continue

	}
	fmt.Println(n)
}
```
