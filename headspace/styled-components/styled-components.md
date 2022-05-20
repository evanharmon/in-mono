# Styled Components

## Resources

- [Docs](https://styled-components.com/docs)
- [Advanced Selectors & Tricks](https://paulie.dev/posts/2020/08/styled-components-style-objects/)

## Style any component

```tsx
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
)

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`
```

## Reusable style object

```tsx
const iconStyles = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

const StyledPlusIcon = styled(PlusIcon)({
  ...iconStyles,
})
```

## Psuedoelements, pseudoselectors, nesting

```tsx
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`
```
