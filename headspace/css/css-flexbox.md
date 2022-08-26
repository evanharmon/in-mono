# CSS FLEX

## Resources

- [CSS Flexbox Cheat Sheet Websites](https://yoksel.github.io/flex-cheatsheet/)
- [CSS Flexbox Making Flexbox Less Scary](https://benweiser.com/making-flexbox-less-scary/)
- [CSS Flexbox Zombies Game](https://mastery.games/flexboxzombies)
- [CSS FlexBox Complete Guide / Cheat Sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Best Practices

- use to arrange items inside a container either horizontally or vertically
- don't use flex box to try and do the layout for an entire web page

## Flex Direction

west: `flex-direction: row` (DEFAULT)
east: `flex-direction: row-reverse`
south: `flex-direction: column`
north: `flex-direction: column-reverse`

## Alignment

alignment is controlled via `justify-content`

#### Unordered Lists

have to apply flex properties

```css
ul {
  display: flex;
  flex-direction: row; /* default - not necessary */
  flex-wrap: wrap;
}
```

#### Take up additional space / fill horizontal / fill screen

```css
flex-grow: 1;
```

#### Flex Scope inheritance

This means that a flex container is always the parent and a flex item is always
the child. Flex properties work only within this relationship

Descendants of a flex container beyond the children are not part of flex layout
and will not accept flex properties. Essentially, elements that are descendants
of flex items do not inherit flex properties

#### Align items along bottom

```css
align-items: flex end;
```

#### Flex Shorthand

`flex: <flex-grow> <flex-shrink> <flex-basis>`

```css
.column {
  flex: 1 1 0px;
}
```
