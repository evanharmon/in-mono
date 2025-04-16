# LINUX SCRIPTS WILDCARD EXPANSION

## Features
case-sensitive by default
- `*` many any number of chars
- `?` match exactly one char
- `??` match exactly two char, etc.
- `[]` match specific set of range chars / numbers
- `{}` match list - like an OR clause

## Turn case-sensitivity on / off

```bash
# case-insensitive
shopt -s nocaseglob
# case-sensitive
shopt -u nocaseglob
```

## Examples

### Match range and single char
you just don't use the hyphen for the char
`ls myfiles[5-8C].conf`

### Match list
`ls myfiles{3,4,5B}.conf`
