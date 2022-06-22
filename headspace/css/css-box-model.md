# CSS BOX MODEL

## Summary

Notes on the CSS box model

## Resources

- [MDN Intro To CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Playground](https://css-playground.com/view/53/box-model-introduction-playground)
- [CSS Tricks box-sizing explained](https://css-tricks.com/box-sizing/)

## Box Basics

every box has four parts (areas) defined by their respective edges:

- content edge
- padding edge
- border edge
- margin edge

content area: dimensions are content width and content height. Bounded by content edge

## Box Sizing

`box-sizing: content-box` is the default. `width and height of your element go out the window as soon as padding and borders are added`

`box-sizing: box-sizing` is present day standard. `element's width and height not affected by padding or borders`


## Debugging trick

```css
* {
    box-sizing: border-box;
    background: rgb(0 100 0 / 0.1) !important;
}
```