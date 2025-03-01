# GIT CLONE

## Commands

### Quicker clone with limited history
```bash
# clone with last commit
git clone --depth 1 https://github.com/evanharmon/in-mono.git
# clone with last 5 commits
git clone --depth 5 https://github.com/evanharmon/in-mono.git
# Without tags / history
git clone --no-tags https://github.com/evanharmon/in-mono.git
```

### Only clone main / single branch

```bash
git clone --single-branch main https://github.com/evanharmon/in-mono.git
# Combine with limited history
git clone --single-branch main --depth 2 https://github.com/evanharmon/in-mono.git
```