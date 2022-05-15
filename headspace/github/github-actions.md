# GITHUB ACTIONS

## Summary

Working with GH Actions

## Resources

- [Workflow Syntax](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)
- [Reusable Workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)
- [Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [React App Example](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)

## Jobs

run in parallel by default

## Steps

used for serial tasks
run in their own process with access to workspace and filesystem
Changes to environment variables are NOT preserved between steps

## Use env var in another workflow

```yaml
env:
  NVMRC_NODE_VERSION: 18
```

...

```yaml
- name: Install node.js / npm
  id: install
  uses: actions/setup-node@v2
  with:
    node-version: ${{ env.NVMRC_NODE_VERSION }}
    registry-url: https://npm.pkg.github.com/
    scope: '@evanharmon'
```
