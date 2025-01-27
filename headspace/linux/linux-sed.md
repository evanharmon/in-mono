# LINUX SED

## Features
stream editor
- default is dry-run, no editing of file
- default is to replace only FIRST occurrence per line
- line numbering starts at 1

## Flags
- `-i` flag edits in place
- `s/` is substitute
- `s/yes/no/g` g - replace every occurrence on line
- `I` ignores case: `s/yes/no/Ig`
- `-n` suppresses automatic printing of all lines

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