# HERE DOCUMENTS

## Resources

- [Guide](http://tldp.org/LDP/abs/html/here-docs.html)
- [SO don't interpolate variables](https://stackoverflow.com/questions/4937792/using-variables-inside-a-bash-heredoc)

## Features
allows passing a string as input to a command
- avoids the need for temp files or pipes

## Single `<<` here string
string operator for single-line strings and explicit delimiters (EOF)

```bash
bc << EOF
scale=0;
2 + 2;
EOF
```

## Triple `<<<` here string
string operator for multi-line strings and implicit delimiters

`echo $(bc <<< "scale=0; 2 + 2")`

## Examples

### Don't Interpolate Variable

use a `\`

```bash
local=$(uname)
ssh -t remote <<EOF
    echo "$local is the value from the host which ran the ssh command"
    # Prevent here doc from expanding locally; remote won't see backslash
    remote=\$(uname)
    # Same here
    echo "\$remote is the value from the host we ssh:ed to"
EOF
```
