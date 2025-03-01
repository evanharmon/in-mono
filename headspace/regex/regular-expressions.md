# REGULAR EXPRESSIONS

## Flags
- `|` or
- `^` start of line
- `$` end of line
- `.` match any single character
- `?` match 0 or 1 ocurrence
- `*` match 0 or more occurrence
- `+` match 1 or more occurrence
- `{min,max}` brackets operator

## Flag Examples

or: `grey|gray`
start of line: `^begin`
end of line: `grey$`
match any single char: `begin.`
match 0 or 1: `colou?r` matches color or colour
match 0 or more: `ab*c` matches ac, abc, abbc, etc
match 1 or more: `ab+c` matches abc, abbc, but not ac

## Brackets operator
match exactly n times: `{n}`
match min times, unlimited max: `{min,}`
match min / max times: `{min,max}`
match min 1, max unlimited: `{,max}`

## Ranges

### match any single character in set
matches `cat` or `cut`
`egrep -r 'c[au]t /etc/`

### Match multiple characters in set
matches `/dev/camera` but not `/dev/tty001`
`egrep -r '/dev/[a-z]*' /etc/`

## Groups / Subexpressions

### Capturing Group

()
`gr(a|e)y`

### Negate range or set
match `https` but not `https:`
`egrep -r 'https[^:]' /etc/`
match only `http` and not `http:` or `https`
`egrep -r 'http[^s:] /etc/`