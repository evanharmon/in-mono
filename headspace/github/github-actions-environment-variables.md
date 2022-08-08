# GITHUB ACTIONS ENVIRONMENT VARIABLES

## Resources

- [Github Actions Environment Variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables)

## Use env var in workflow

```yaml
env:
  NVMRC_NODE_VERSION: 18
```

...

```yaml
- name: Install node.js / npm
  id: install
  uses: actions/setup-node@v3
  with:
    node-version: ${{ env.NVMRC_NODE_VERSION }}
    registry-url: https://npm.pkg.github.com/
    scope: '@evanharmon'
```
