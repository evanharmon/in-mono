# Cut

## Limitations
- have to use redirections to save output

## Flags
`-f<#>` is field selector
`-d<char>` is the delimiter

example:
cut the first field, delimiter is a space
`cut -d ' ' -f1 info.txt`

## Cut the first part of a colon delimited string
example on line 1 of a file: `db_admin:1234`

`cut -f1 -d: file.txt`
output is: `db_admin`

## CSV example
`cut -d ',' -f 3 myfile.txt > new_file.txt`