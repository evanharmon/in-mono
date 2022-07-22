# CSS EM

## Resources

- [MDN CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Kevin Powells em vs rem CSS CodePen](https://codepen.io/kevinpowell/pen/RKdjXe)

## Features

- font size of the parent for typographical properties
- font size of element itself in case of properties like `width`
- can be used for padding, width, height, margins, etc
- very helpful for proper scaling like buttons with margin spacing, etc

## Limitations

- compounding can lead to really big fonts for over use of `em`

## Recommendations

use `em` for margin, padding, etc but prefer `rem` for font-size settings

## Use with Margin, Padding, etc

looks at the font-size of the element it is ON

example, the `em` will relate to the `2em` font-size of element:

```css
.my-class h1 {
  font-size: 2em;
  mrgin-bottom: 1em; // equal to 2em
}
```
