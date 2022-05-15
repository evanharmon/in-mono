# CSS TRANSITION

## Resources

- [CSSTransition Docs](https://reactcommunity.org/react-transition-group/css-transition)
- [Inherited features from Transitions](https://reactcommunity.org/react-transition-group/transition)

## States

- `appear`
- `enter`
- `exit`

## `*-active` class

activates transition. The style you want to animate **to**
this is why transition css prop should always be in 'active' class

## `*-done` class

applied to persist transition state

## `in` prop

when set to true, child component receives `example-enter`.
Next tick is `example-enter-active`
allows animation of appearance of child component

## `appear` prop

default behavior, child component DOES NOT perform enter transition on first mount
`appear=true` allows this behavior.
Basically allows an initial render animation that differs from on / off button click transitions
