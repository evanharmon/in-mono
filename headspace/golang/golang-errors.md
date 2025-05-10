# GOLANG ERRORS

## Resources
- [Golang error docs](https://golang.org/pkg/errors/)
- [Field from Custom error struct example](https://godoc.org/google.golang.org/api/googleapi#Error)

## Features
errors are a pre-defined interface - standard return type NOT an exception
remember: go does not include exceptions like other languages.
- returns error signal to calling function
- every error contains a Description

## Examples

### Return error with formatting
```golang
err := beforeTestGetEnv()
if err != nil {
  fmt.Errorf("Before failed: %v", err)
}
```

### Check for error without redeclaring
Note other variables returned from function will have to not be in scope to
the rest of the function
```golang
if err := beforeTestGetEnv(); err != nil {
  t.Errorf("Before failed: %v", err)
}
```

### Allow function caller to handle err
```golang
return nil, err
```

### Use field from custom error struct
```golang
err := bkt.Create(ctx, projectID, nil)
gerr, ok := err.(*googleapi.Error)
if err != nil && ok && gerr.Code != 409 {
  return err
}

return nil
```

### Add string context to error
```golang
errors.wrap(err, "read failed")
```

### Handle file errors
```golang
file, err := os.Open("myfile.txt")
if err != nil {
  switch {
    case os.IsNotExist(err):
      log.Fatal("File does not exist.")
    case os.IsPermission(err):
      log.Fatal("No permissions to access file.")
    default:
      log.Fatal("Unexpected error.")
  }
}
```
