# CMAKE

## Resources

- [Cmake site](https://cmake.org/)

## Auto generate `compile_commands.json`

in CMakeLists.txt

```txt
cmake_minimum_required (VERSION 2.6)
project (Tutorial)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
add_executable(person Person.cc Pirate.cc main.cc)
```

## Export CMAKE Variable

```console
export DCMAKE_EXPORT_COMPILE_COMMANDS=1
```

## Build With Debug Symbols

```txt
set(CMAKE_BUILD_TYPE Debug)
```

or

```console
cmake -DCMAKE_BUILD_TYPE=Debug <path and other arguments>
```

## Build on Apple M1 ARM

add the CFLAG `-target arm64-apple-macos10.5`
