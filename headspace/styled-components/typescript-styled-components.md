# TYPESCRIPT STYLED COMPONENTS

## Resources

- [Docs on Typescript](https://styled-components.com/docs/api#typescript)

## Pass custom prop

includes inline type declaration

```tsx
const StyledDropdownDiv = styled.div<{ height: string }>`
  height: ${props => props.height};
  position: absolute;
  top: 58px;
  width: 300px;
  padding: 1rem;
  overflow: hidden;
`
```
