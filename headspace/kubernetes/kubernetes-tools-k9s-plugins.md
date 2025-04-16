# K9S PLUGINS

## Resources
- [k9s community plugins](https://github.com/derailed/k9s/blob/master/plugins/README.md)

## Default directory macOS
usually have to create the file first though
`/Users/<user>/Library/Application Support/k9s/plugins.yaml`


## Debugging example
checking env variables
```yaml
plugins:
  testawsplugin:
    shortCut: Shift-Q
    description: "Test AWS env"
    scopes:
      - node
    command: bash
    args:
      - -c
      - 'env | grep "AWS"; sleep 5'
```
