# GOLANG RECEIVERS

## Resources

- [Wiki](https://github.com/golang/go/wiki/MethodSets)

## Declaration

Best Practice is to use pointer receivers since you need to manipulate state

```golang
func (s *Service) PostNote(ctx context.Context, n Note) (Note, error) {
```

## Examples

### Method Receiver Values

Receiver type value can only accept values

```golang
func (s Service) myFunc() {}
// OK: `myFunc(svc)`
// NOT OK: `myFunc(&svc)`
```

### Method Receiver Pointer

Receiver type pointer can accept value or pointer

```golang
func (s *Service) myFunc() {}
// OK: `myFunc(svc)`
// OK: `myFunc(&svc)`
```

### Anonymous receiver
use when you don't need access to receiver fields but need type
```go
type UpperCase{}

func (UpperCase) Format(str string) string {}
```
