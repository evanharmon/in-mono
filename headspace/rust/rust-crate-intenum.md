# RUST CRATE INTENUM

## Resources

- [Rust Crate IntEnum](https://docs.rs/int-enum/0.5.0/int_enum/trait.IntEnum.html)

## Get Enum as int value

```rust
use int_enum::IntEnum;

#[repr(u32)]
#[derive(Debug, PartialEq, Eq, Clone, Copy, IntEnum)]
pub enum ResistorColor {
    Black = 0,
    Blue = 1,
    Brown = 2,
    Green = 3,
    Grey = 4,
    Orange = 5,
    Red = 6,
    Violet = 7,
    White = 8,
    Yellow = 9,
}

pub fn color_to_value(_color: ResistorColor) -> u32 {
    let color = ResistorColor::try_from(_color).unwrap_or(ResistorColor::Black);
    color.int_value()
}
```
