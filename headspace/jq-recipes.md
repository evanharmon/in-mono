# JQ RECIPES

## Resources

- [JSON / JQ / CSV tutorial](https://programminghistorian.org/en/lessons/json-and-jq)
- [Cheat Sheet](https://gist.github.com/olih/f7437fb6962fb3ee9fe95bda8d2c8fa4)

## Basic Commands

### Get all paths in json
`cat file.json | jq -c 'paths`

### Query Example

`{ "results": [{ "doc": {} }] }`

`cat file.json | jq '.results[].doc'`

### Exclude Keys Example

```bash
cat ~/Downloads/myfile.json |\
  jq '.results[].doc' |\
  jq 'del(._id, ._rev)' |\
  more
```

`jq 'del(._id, ._rev)'`

## JSON Newline to CSV

`jq -rs '.[]|[.User, .CreateTimeStamp]|@csv'`

## Read Directly From File

```bash
jq -n --slurpfile f manifest.json '$f[]|.builds | last | .artifact_id | split(":") | last'
```

## Recipes
### Map And Filter Array Of JSON To Inner Object

```bash
cat file.json | jq '.docs' | jq 'map(.payload)' | more
```

### Exclude Keys But Keep Commas For Array Of Objects

```bash
cat new.json |\
  jq '.results' |\
  jq 'map(select(.doc != null) | .doc | del(._rev))' >\
  test.json
```

### Exclude Nulls So You Can Map

```bash
cat file.json | jq '.results' | jq 'map(select(.doc != null) | .doc)' | more
```

```bash
cat file.json |\
  jq '.results' |\
  jq 'map(select(.doc != null) | .doc | del(._id,._rev))' >\
  export.json
```

### Copy Deep Nested Object And Use As Outer Id

`{ "docs": [{ "payload": { "d": { "Field": "XYZ" } } }] }`

```bash
cat file.json |\
  jq '.docs' |\
  jq 'map(. + { id: .payload.d.FUNCTION_LOCATION })' |\
  more
```

### Convert Number To String

```bash
jq '{ docs: map(. + { _id: ((.payload.OBJECTID|tostring) + "-" + .payload.LOCATION) }) }'
```

### To Lowercase

```bash
cat myfile.json |\
     jq '.docs' |\
     jq 'map(. + { id: ("city-" + (.payload.WorkCity|ascii_downcase)) })' |\
     less
```

### Move Property Out Of A Nesting Level And Delete Parent Property

```bash
cat myfile.json |\
  jq 'map(. + { payload: .results[0] } | del(.d))' |\
  less
```

### Add New Object With Array Of Objects

```bash
cat myfile.json |\
    jq '.results' |\
    jq 'map(select(.doc != null)|.doc)' |\
    jq 'map(. + { orgs: [{ orgType: "Placeholder" } + .orgsData[0].myfield] } | del(.orgsData))' |\
    less
```

### Map object and extra two properties to CSV

```bash
cat myfile.json |\
     jq '.results' |\
     jq 'map(select(.doc != null) | .doc.payload | { field1: .field1, field2: .field2 })' |\
     jq -r '(map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.])) as $rows | $cols, $rows[]' |\
     jq -r @csv > myfile.csv
```

### Parse and Get Length Of Key

```bash
cat file.json | jq '.results' | jq 'map(select(.id != null)| .) | length'
```

### Assign JQ Result To A Bash Variable

```bash
FILE_SYSTEM_ID=$(aws efs describe-file-systems|jq '.FileSystems[0].FileSystemId)
```

### Get List Of Properties

`cat myfile.json | jq 'map(keys) | add | unique'`

### Get Max Of A Key Value In Array

`cat myfile.json | jq 'map(.OrderNo) | max'`

### Get AMI ID From Packer Manifest.json

```bash
cat manifest.json | jq '.builds | last | .artifact_id | split(":") | last'
```

### Search For Word In Array

- [GH Issue](https://github.com/stedolan/jq/issues/861)

```bash
jq '.arrayOfStuff[] | select(.key2 | contains("dar"))' JSONFile.json
```

### Wrap Items In Array And Add Commas

- [GH Issue](https://github.com/stedolan/jq/issues/124)

`jq -r '[.Items]' test.json`

### Create Valid JSON From Newline-Delimited JSON

`jq -rs '.' my-newline-json.json`

### Use Env Variable

```bash
jq '.Messages | map(. + { Id: .MessageId, MessageBody: .Body } | del(.Body,.MD5OfMessageAttributes,.MD5OfBody,.ReceiptHandle,.Attributes,.MessageId)) | { QueueUrl: env.Q_URL, Entries: . }' messages.json > cli-input.json
```

### Convert Newline Delimited Text To Array

`jq -rs '.' myfile.txt`

### Get Length Of Newline JSON

`jq -rs '.|flatten' myfile.json`

### Flatten NewLine Array JSON

`["one", "two", "three"][("four", "five", "six")]`

`jq -rs '.|flatten' myfile.json > flattened-myfile.json`
