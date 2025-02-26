# LINUX ECHO

## Flags
- `-e` enables interpretation of backslash escapes

## Backslack escapes
```
\n: newline
\t: tab
\\: backslash
\a: alert (bell)
\b: backspace
\f: form feed
\r: carriage return
\v: vertical tab
```

## Commands

### Example backslash escaping

```bash
echo -e "Hello\nWorld!"
Outputs:
# Hello
# World!
```

## Print without adding newline
often combined with `-e` to escape backslashes. Useful in a loop.
`for var in $(env); do echo -ne "$var"; done`