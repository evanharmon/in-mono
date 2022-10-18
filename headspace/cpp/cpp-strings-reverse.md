# CPP STRING REVERSE

## Resources

- [CPP digital ocean reverse string](https://www.digitalocean.com/community/tutorials/reverse-string-c-plus-plus)
- [CPP Geeks reverse string](https://www.geeksforgeeks.org/reverse-a-string-in-c-cpp-different-methods/)

## Reverse A String

`std::reverse` mutates original string

```cpp
#include <algorithm>
#include<iostream>
#include<string>
using namespace std;
int main()
{
    string str = "Journal Dev reverse example";
    reverse(str.begin(), str.end());
	cout<<"\n"<<str;
    return 0;
}
```
