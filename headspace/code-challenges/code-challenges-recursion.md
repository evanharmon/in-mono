# CODE CHALLENGES RECURSION

## Tips

- what are the bare minimum info needed to represent the problem
- give defaults to these bare minimum info
- check the base case to ensure exit
- call function again with some modification of arguments

## Incrementing Recursion

Count UP and still exit early. console log happens AFTER recursion call
So no console.logs occur until `return` statement is hit in final recursion call

```javascript
function myRecursion(n) {
  if (n === 0) return
  myRecursion(n - 1)
  console.log(n)
}
myRecursion(15)
```

## Decrementing Recursion

Count down and still exit early. console log happens BEFORE recursion call

```javascript
function myRecursion(n) {
  if (n === 0) return
  console.log(n)
  myRecursion(n - 1)
}
myRecursion(15)
```
