# CPP STRING

std::string

## Resources

- [CPP reference strings library](https://en.cppreference.com/w/cpp/string)

## Create std::string

```cpp
#include <iostream>
#include <string> // the C++ Standard String Class

int main() {
    std::string str = "C++ String";
    std::cout << str << "\n"; // prints `C++ String`"
}
```

## Cast Int To String

```cpp
std::to_string(121)
```

## Convert String To Int

- [CPP Geeks convert string to int](https://www.geeksforgeeks.org/converting-strings-numbers-cc/)

```cpp
int i = std::stoi("10");
int i = std::stol("1013433");
int i = std::stoll("2147483648");
```

## Get Length Of String

```cpp
std::string str ("Test string");
std::cout << "The size of str is " << str.length() << " bytes.\n";
```

## Join Strings

```cpp
auto sign = "-";
auto sint = "123";
auto joinedInt = sign + sint;
```
