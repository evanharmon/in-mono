# GAME PROGRAMMING FLOATING POINT

## Resources

- [Floating Point Numbers explained](https://floating-point-gui.de/formats/fp/)
- [Floating Point Additional / Subtraction](https://www.cs.uaf.edu/2000/fall/cs301/notes/notes/node51.html)
- [Floating Point IEEE 754-2008 standard](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)
- [Floating Point Computerphile YT Video](https://youtu.be/PZRI1IfStY0)
- [Floating Point vs Fixed Computerphile YT Video](https://youtu.be/f4ekifyijIg)
- [Floating Point Addition Computerphile YT Video](https://youtu.be/782QWNOD_Z0)
- [Floating Point Float Toy GH page example](https://evanw.github.io/float-toy/)
- [Floating Point IEEE 754 Visualization](https://bartaz.github.io/ieee754-visualization/)
- [Floating Point Exposed Gh Page](https://float.exposed/0x40490fdb)

## Features

- uses sign bit at the start
- sign is assumed to be 1 and omitted
- exponent has a bias (127) and not a sign
- mantissa / significand represents actual number

## Limitations

- operations take longer as
- lossy compression style

## Parts

s = `sign bit`
e = `exponent bit`
m = `mantissa bits`

```
00000000 00000000 00000000 00000000
seeeeeee emmmmmmm mmmmmmmm mmmmmmmm
```

## Zero representation

`00000000 00000000 00000000 00000000`

## Addition / Subtraction

ex: add 2.25 x 10<sup>0</sup> + 1.340625 x 10<sup>2</sup>

1. Representation has to be shifted to match exponent

<!-- prettier-ignore -->
  0.225     x 10<sup>2</sup>

<!-- prettier-ignore -->
+ 1.340625  x 10<sup>2</sup>

2. Addition / Subtraction

1.363125 x 10<sup>2</sup>

3. Normalize result
