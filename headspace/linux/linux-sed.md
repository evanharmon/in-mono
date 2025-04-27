# LINUX SED

## Features
stream editor
- default is dry-run, no editing of file
- default is to replace only FIRST occurrence per line
- line numbering starts at 1

## Flags
- `-i` in-place in-file substition
- `s/` is substitute
- `s/yes/no/g` g - replace every occurrence on line
- `I` ignores case: `s/yes/no/Ig`
- `-n` suppresses automatic printing of all lines

## Pattern matchers
the normal ones
- `.` single char except a newline
- `*` zero or more char
- `[]` match any one of enclosed chars
- `\b` word boundary

## Search and Replace

### Preview search and replace results

`sed 's/canda/canada' myfile.txt`

### Edit file in place as backup

replaces `hello` with `bonjour`
`sed -i .bak 's/hello/bonjour/' file.txt`

### Search And Replace In A File From Shell Command

```bash
sed -i 's/REPLACE_WITH_INSTANCE_IP/'$INSTANCE_IP'/g' /tmp/init-cluster.sh
```

## Search and replace within a range of lines
`sed '500,2000s/enabled/disabled/g' myfile`

### Replace with case-insensitive
`sed 's/disabled/enabled/Ig' myfile`

## Print style commands

### Print first 10 lines of file
Emulate `head`: `sed 10q`

### Print first line of file
Emulate `head -1`: `sed q`

### Print range of lines in a file
prints lines 500 to 510
`sed -n '500,510p' values.conf`

### Remove trailing comma from input
`echo 'get,list,put,' | sed 's/,*$//'`

## Insert
macOS makes this a PITA - needs deliberate new lines and diff format

### Insert a line

```sh
echo -e "Hello World\nAnother Line\nGoodbye World" > file.txt
sed '/Hello World/a Inserted new line' file.txt 
# macOS - needs new lines and for `a` to be `a\`
sed '/Hello World/a\ 
Inserted new line
' file.txt 
```

## Delete

### Delete a line
```sh
echo -e "Line 1\nLine 2" > file.txt
sed '/Line 2/d' file.txt
```

## Find exec uses

### Find And Replace On Mac OS X

avoids the `invalid command code` error

```bash
find ./**/*.tf -type f -exec sed -i '' -e "s/\? false/\? \"false\"/g" {} \;
```

## Common issues

### macOS
beware on macOS the `-i` flag requires an argument.
Otherwise you'll see errors like:
```bash
sed -E -i 's/replicas: 5/replicas: 3/g' *.yaml
# sed: 1: "cache-patch.yaml": command c expects \ followed by text
# or
find . -type f -name "*.yaml" -exec sed -i 's/replicas: 5/replicas: 3/g' {} + 
# sed: 1: "./cache-patch.yaml": invalid command code .
# correct syntax
sed -E -i '' 's/replicas: 5/replicas: 3/g' *.yaml
```  