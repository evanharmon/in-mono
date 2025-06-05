# GOLANG JSON

## Resources

- [Tidwall/gjson](https://github.com/tidwall/gjson)
- [GJSON Playground](https://gjson.dev/)

## Use GJSON Package

```golang
package main

import "github.com/tidwall/gjson"

const json = `{"name":{"first":"Janet","last":"Prichard"},"age":47}`

func main() {
	value := gjson.Get(json, "name.last")
	println(value.String())
}
```

## Parse JSON

```golang
title := gjson.Get(*msg.Body, "data.title")
fmt.Printf(title.String())
```
