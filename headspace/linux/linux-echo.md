# LINUX ECHO

## Flags
- `-e` enables interpretation of backslash escapes
- `-n` don't print newline

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

## Common color codes
30: Black
31: Red
32: Green
33: Yellow
34: Blue
35: Magenta
36: Cyan
37: White

## Commands

### Example backslash escaping

```bash
# print across multiple lines with a single echo
echo -e "Hello\nWorld!"
Outputs:
# Hello
# World!
```

```bash
# print with tabs
echo -e "Item \tPrice \tCount"
# print double quotes
echo -e "This is text. \"This is double quotes\"."
# Escape slashes for window paths
echo -e "C:\\\Programs\\\minecraft\\\file.txt"
```

## Print without adding newline
often combined with `-e` to escape backslashes. Useful in a loop.
`for var in $(env); do echo -ne "$var"; done`


## Print with ASCII Colors
```bash
echo -e "\e[31mThis is red text.\e[0m"  # Prints red text
echo -e "\e[32mThis is green text.\e[0m"  # Prints green text
```