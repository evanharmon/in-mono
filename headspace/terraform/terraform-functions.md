# TERRAFORM FUNCTIONS

## Resources

- [Terraform Function Docs](https://www.terraform.io/docs/configuration/functions.html)
- [Flatten Docs](https://www.terraform.io/docs/configuration/functions/flatten.html)

## String Functions

### Uppercase

`upper()`

### Convert int to string

`tostring()`

### Split

```hcl
variable my_string = "hello,world,terraform"

output split_result {
  value = split(",", var.my_string)
}
```

### Upper / Lower / Titlecase
`upper(var.myvar)`
`lower(var.myvar)`
`title(var.myvar)`

### Substring
offers string, start, end params
```hcl
variable my_string = "hello world"

output substr_result {
  value = substr(var.my_string, 6, 5)
}
```

### Join
```hcl
variable my_strings = ["hello", "world", "Terraform"]

output join_result {
  value = join(" ", var.my_strings)
}
```

## Numeric functions

### Get max from a set

```hcl
variable "myset" {
  type = set(number)
  default = [ 100, 12, 15, 3]
}
```

Use `...` expansion to iterate out each element for max check
via terraform console: `max(var.myset...)`

### Ceil / Floor
`ceil(15.9)`
`floor(9.5)`

## Flatten

if trying to stringify a list and getting the error 'is tuple with X elements'
try flattening

```hcl
network_subnets = flatten([
  for network_key, network in var.networks : [
    for subnet_key, subnet in network.subnets : {
      network_key = network_key
      subnet_key  = subnet_key
      network_id  = aws_vpc.example[network_key].id
      cidr_block  = subnet.cidr_block
    }
  ]
])
```

## Read from file
`file("deploy.yaml")`

## Collection functions

### Lookup map value and set default

`lookup({a="ay", b="bee"}, "a", "what?")`

### Index
`index(var.ami, "AMI-")`

### Contains
`contains(var.myvar, "somestring")`

### Get keys from map
`keys(var.mymap)`

### Get values from list
`values(var.mylist)`

### Grab First Element

helps with the `element() may not be used with an empty list` error

`"${element(concat(aws_cognito_user_pool_client.web.*.id, list("")), 0)}"`

### Typical Element Use

use index syntax `var.my_list[count.index]`

Only use `element()` when wrap-around index behavior is necessary
