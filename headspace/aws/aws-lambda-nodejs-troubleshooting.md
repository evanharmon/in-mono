# AWS LAMBDA NODE.JS TROUBLESHOOTING

## `Cannot use import statement outside a module`

add a `package.json` file with the below contents

```json
{
  "type": "module"
}
```
