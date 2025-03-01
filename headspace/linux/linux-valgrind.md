# VALGRIND

## Resources

- [Valgrind Homepage](http://www.valgrind.org/)

## Requirements

compile with `-g` debug flag

## Install on Mac

install latest dev version as stable lags far behind new mac os versions

```console
brew install --HEAD valgrind
```

## Run

remember Valgrind wants a well defined path like `./my-program`

```console
valgrind ./reverse-string
```

## Check for memory leaks

```console
valgrind --leak-check=yes ./reverse-string
```
