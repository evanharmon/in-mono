# GIT RESTORE

## Remove file from last commit

assuming you haven't pushed. Allows re-using same git commit msg as well

```console
git reset --soft HEAD~1
git restore --staged ../Cargo.lock
git commit -c ORIG_HEAD
```
