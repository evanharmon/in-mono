# C++

## Resources

- [Cpp reference](https://en.cppreference.com/w/)
- [Cpp Lambdas Explained](https://shaharmike.com/cpp/lambdas-and-functions/)

## Casts

#### Generic Cast Form

```cpp
cast_name<cast_to_type>(item_to_cast)
```

#### Static Cast

no runtime checks performed. static_cast cannot cast away const or volatile.

```cpp
int * y = static_cast<int*>(malloc(10));
```

#### Malloc Casts

error: `cannot initialize a variable of type 'int *' with an rvalue of type 'void *'`
use a static cast

- [CPP C Casting](https://embeddedartistry.com/blog/2017/2/28/c-casting-or-oh-no-we-broke-malloc)

```cpp
int * p = static_cast<int*>(malloc(10));
```

#### Const Cast

`const_cast`
