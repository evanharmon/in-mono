# LINUX SCRIPTS CONDITIONAL OPERATORS

## Comparison Operators
strings:
- `=` check for exact match
- `!=` check for not a match
- `<` and `>` compare position of strings
- `&&` and
- `||` or

numbers:
- `-eq` check for a match
- `-ne` check for not a match
- `-gt` check for greater than
- `-lt` check for less than

### Double brackets [[ ]] enhanced checks
enhanced conditional check supporting additional operations like:
- matching patterns
- using expressions
- bash extensions
- only in bash / modern shells

### And / Or operators
double brackets don't require additional bracket separation of conditions

is A greater than 4 and less than 10:
`[[ A -gt 4 && A -lt 10 ]]` or `[ A -gt 4] && [ A -lt 10 ]`

is A greater than 4 or less than 10:
`[[ A -gt 4 || A -lt 10 ]]` or `[ A -gt 4] || [ A -lt 10 ]`

### Check if string contains
`[[ "abcd" = *bc* ]]`

### Check if X character is a match
check if 3rd char is `c` or `d`. Both the below are true.
`[[ "abc" = ab[cd] ]]`
or
`[[ "abd" = "ab[cd]" ]]`

### Check if string1 comes before string2
- alphabetical order
true
`[[ "abc" < "bcd" ]]`

### Check if string1 comes after string2
- alphabetical order
false
`[[ "abc" > "bcd" ]]`
