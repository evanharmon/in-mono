# GITHUB ACTIONS SETUP-NODE

## Resources

- [Github Actions setup node](https://github.com/actions/setup-node)

## Example

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: actions/setup-node@v3
    with:
      node-version: 16
  - run: npm ci
  - run: npm test
```