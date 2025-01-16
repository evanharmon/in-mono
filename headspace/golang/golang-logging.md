# GOLANG LOGGING

## Resources

- [Package Level Loggers Done Right](https://dave.cheney.net/2017/01/23/the-package-level-logger-anti-pattern)

## Log the Pointer Value

```golang
// &s is mem location \**s,
//s is *something,
//*s is something the actual value
fmt.Printf("%v %p %v\n", &s, s, *s)
```

## Print string values
```golang
fmt.Printf("User name is: %s", name)
```

## Print integers / floats
```golang
fmt.Printf("The answer is %d.\n", 42)
fmt.Printf("Pi is %.2f.\n", 3.14159)
```

## Print value of any type
```golang
fmt.Printf("User id is: %v", name)
```

## Print memory address of variable
```golang
var x int = 123
fmt.Printf("%p\n", &x)
```

## Print variable type
```golang
var x int = 123
fmt.Printf("%T\n", x)
```

## Print type and value
```golang
var x int = 123
fmt.Printf("%#v", x)
```

## Pretty Print Struct

[Printing struct with property names](https://stackoverflow.com/questions/24512112/how-to-print-struct-variables-in-console)

```golang
fmt.Printf("%+v\n", yourProject)
```

## FatalF

Log error and then exit. FatalF is followed by an automatic call to os.Exit(1)

```golang
log.Fatalf("Abort Abort error", err)
```

## Print error
```golang
err := fmt.Error("Something went wrong")
fmt.Printf("%v\n", err)
```
