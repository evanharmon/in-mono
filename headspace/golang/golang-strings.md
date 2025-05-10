# GOlANG STRINGS

## Features
Notes on simple string manipulation in golang
- strings are immutable
- use `len()` to get length of string

## Escape characters
- `\t` tab
- `\n` newline
- `\\` backslash
- `\"` for quote, etc

## Printf flags
- `%s` string
- `%d` int
- `%f` or `%.2f` float with decimal places
- `%t` bool

## Quick Concat

```golang
fmt.Sprintf("%s.wav", fname)
// or even easier
name := "project-core"
var prefixed_name = name+"-saturn"
```

## Convert []string To String

- [Docs](https://golang.org/pkg/strings/#Join)
- [SO](https://stackoverflow.com/questions/41756412/golang-convert-type-string-to-string)

```golang
stringArray := []string {"Hello","world","!"}
justString := strings.Join(stringArray," ")
fmt.Println(justString)
```

## Iterate / Collect List Of Strings

```golang
var list []string
for _, msg := range messages {
    list = append(list, msg.MessageId)
}
```

## String Pointer

```golang
myStr := "test"
strPnt := &mystr
```

## Dereference String Pointer

```golang
func DerefString(s *string) string {
    if s != nil {
        return *s
    }

    return ""
}
```

## Convert String to Bytes

easy!

```golang
myStr := "Test"
b := []byte(myStr)
```

## String builder
```go
b := &strings.Builder{}
b.WriteString("Hello ")
b.WriteString("World ")
b.PrependString("Goodbye ")
fmt.Println(b.String())
```
