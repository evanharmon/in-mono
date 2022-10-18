# CPP C STRINGS REVERSE

## Resources

- [CPP reference strings library](https://en.cppreference.com/w/cpp/string)
- [CPP digital ocean reverse string](https://www.digitalocean.com/community/tutorials/reverse-string-c-plus-plus)

## Reverse

```cpp
#include<iostream>
#include<cstring>
using namespace std;
int main()
{
    char str[] ="Journal Dev reverse example";
    strrev(str);
	cout<<"\n"<<str;
    return 0;
}
```
