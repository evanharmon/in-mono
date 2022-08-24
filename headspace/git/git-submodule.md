# GIT SUBMODULES

## Add Submodule To Repo

```console
git submodule add -b master -- https://git@github.com/myorg/myrepo.git
```

## List Submodules

```console
git config --local --list
```

## List Submodule Commit Hashes

```console
git submodule
```

## Remove Submodule

```console
git submodule deinit mymodule
git rm --cached mymodule
```

## Location Of Git Submodule Commit Hashes

```console
ls -la .git/modules
cat .git/modules/mysubmodule/HEAD
```

## Move / Rename Submodule Folder on Mac

- [Git Submodules move and rename Stack Overflow](https://stackoverflow.com/questions/4526910/rename-a-git-submodule)

do a temporary move

```console
git mv Common commontemp
git mv commontemp common
```

## Update Submodules

```console
git submodule update --init --recursive
```

## Check submodule path for errors

```console
git submodule status
```
