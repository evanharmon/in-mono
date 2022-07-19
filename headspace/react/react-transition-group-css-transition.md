# REACT TRANSITION GROUP

## Resources

- [React Transition Group CSSTransition Docs](https://reactcommunity.org/react-transition-group/css-transition)
- [React Transition Group Inherited features from Transitions](https://reactcommunity.org/react-transition-group/transition)

## Styling

no styling is passed in to <CSSTransition /> component. The library adds or
removes class names from DOM elements directly.

## States

- `appear`
- `enter`
- `exit`

## Class types

example class naming: `primary-enter`, `primary-enter-active`, `primary-enter-done`

`*`
starting state

`*-active`

activates transition. The style you want to animate **to**
this is why transition css prop should always be in 'active' class

`*-done`

applied to persist transition state

## `in` prop

when set or evaluated to true, child component receives `example-enter`.
Next tick is `example-enter-active` allows animation of appearance of child component

## `appear` prop

default behavior, child component DOES NOT perform enter transition on first mount
`appear=true` allows this behavior.
Basically allows an initial render animation that differs from on / off button click transitions

## NodeRef && CSS Module Example

```css
/* ./DropdownMenuPrimary.module.css */
.enter {
  transform: translateX(110%);
}
.enterActive {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.exitActive {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}
```

```tsx
import primaryStyles from './DropdownMenuPrimary.module.css'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { StyledDropdownDiv } from './StyledDropdownDiv'

export default MyComponent() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState('0px')
  const mainMenuRef = useRef(null)

  function calcHeight(el: HTMLElement) {
    console.log(`calcHeight el`, el)
    const height = el.offsetHeight || 0
    setMenuHeight(`${height}px`)
  }

  return (
    <StyledDropdownDiv ref={dropdownRef} height={menuHeight}>
      <CSSTransition
        nodeRef={mainMenuRef}
        in={activeMenu === 'main'}
        timeout={500}
        unmountOnExit
        classNames={{ ...primaryStyles }}
        onEnter={() => mainMenuRef?.current && calcHeight(mainMenuRef.current)}
      >
        {/* children go here */}
      </CSSTransition>
    </StyledDropdownDiv>
  )
}
```
