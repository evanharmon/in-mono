# YAML

## Resources

- [Yamllint online parser](http://www.yamllint.com/)
- [Yaml Online Parser](http://yaml-online-parser.appspot.com/)

## Features

- dictionaries are unordered
- lists are ordered

## Simple Types

### String
`allow: !!str true`

### Boolean
`EBSEnabled: !!bool true`

### Integer
`Iops: !!int 0`

### Null
`value: !!null null`

## Complex Types

### Array / List
```yml
- Blue NSX
- Red NSX
- Yellow NSX
```

### Dictionary
```yml
Color: Blue
Make: Acura
Model: NSX
Transmission: Manual
Price: $90,000
```

### Dictionary In Dictionary
```yml
Banana:
  Calories: 105
  Fat: 0.4g
  Carbs: 27g
```

### List of Dictionaries
```yml
- Color: Blue
  Make: Acura
  Model: NSX
  Transmission: Manual
  Price: $90,000
- Color: Red
  Make: Acura
  Model: NSX
  Transmission: Manual
  Price: $90,000
- Color: Yellow
  Make: Acura
  Model: NSX
  Transmission: Manual
```

### Key Value / Dictionary / Lists
```yml
spec:
  volumes:
    - name: configmap
	  emptyDir: {}
```

### Property with Array of items
```yml
AllowedValues:
	- t2.micro
		- m1.small
			- m1.large
			# Basic Object
			## Two Space Indentation
				Name: Instance 2
				# Nested Objects
				Properties:
					KeyName: testPair
```

# Exclude line breaks from content
```yml
!!str "line feed, \
      is ignored"
      # Include line breaks in content
      !!str "line one then, \n\
            line two"
```

## Comparisons

### Dictionaries will be same as unordered
```yml
# Both items are equal
Car:
	Color: Yellow
	Make: Acura
	Model: NSX
	Transmission: Manual
---
Car:
	Make: Acura
	Color: Yellow
	Model: NSX
	Transmission: Manual
```

### List will not be the same as ordered
```yml
# Both items are NOT equal
Fruits:
- Orange
- Apple
- Banana
---
Fruits:
- Orange
- Banana
- Apple
```