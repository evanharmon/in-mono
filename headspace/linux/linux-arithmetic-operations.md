# LINUX ARITHMETIC OPERATIONS

## Limitations
- `expr` and double-parens is limited to decimals and rounds down
- for script args, `$` prefix is still required

## Expr
- `*` has to be escaped
- spaces are required

```bash
expr 1 + 1
expr 1 - 1
expr 1 / 1
expr 1 \* 2
```

works with variables
```bash
A=2
B=1
expr $A + $B
expr $A - $B
expr $A / $B
expr $A \* $B
```

## Double Parenthesis
- avoids the need to escape `\*`
- don't need to prefix variables with `$`
- less restrictive on space reqs
- result must be passed to a variable, or `echo`, etc.

```bash
A=2
B=1
echo $(( A + B ))
echo $(( A-B ))
echo $((A/B))
echo $((A*B))
```

C style increment / decrement works as well
```bash
A=8
# Prints AFTER incrementing
echo $(( ++A))
echo $(( --A))
# Prints BEFORE incrementing
echo $(( A++))
echo $(( A--))
```

## Support floating point
pass to basic-calculator `bc -l` with floating-point flag

```bash
A=10
B=3
echo $A / $B | bc -l
# still have to escape product if not using parens
echo $A \* $B | bc -l
# Don't have to escape if using parens
echo "($A * $B) / 2" | bc -l
```

example in full script for average
```bash
num_1=$1 
num_2=$2 
num_3=$3 
sum=$(( num_1 + num_2 + num_3)) 
average=$(echo "$sum / 3" | bc -l) 
echo "$average" 
```