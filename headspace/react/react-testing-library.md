# REACT TESTING LIBRARY

## Resources

- [React Testing Library Docs](https://testing-library.com/docs/intro)
- [React Testing Library FAQs](https://testing-library.com/docs/react-testing-library/faq)
- [React Testing Library Use With Jest](https://jestjs.io/docs/en/tutorial-react#dom-testing)
- [React Testing Library Dom Testing Example Docs](https://testing-library.com/docs/dom-testing-library/example-intro)
- [React Testing Shallow Renderer](https://reactjs.org/docs/shallow-renderer.html)
- [React Testing Library Example Docs](https://testing-library.com/docs/react-testing-library/example-intro)
- [React Testing Library Advanced Hooks](https://react-hooks-testing-library.com/usage/advanced-hooks)
- [Kent C Dodds Testing Javascript Course](https://testingjavascript.com)
- [Cypress Dom Testing Integration](https://testing-library.com/docs/cypress-testing-library/intro)

## Show DOM / React Component

- [Debug Docs](https://testing-library.com/docs/react-testing-library/api#debug)

```javascript
const HelloWorld = () => <h1>Hello World</h1>
const { debug } = render(<HelloWorld />)
debug()
```

## Accessibility / Icon Library Buttons

`getByLabelText` will be driven by `aria-label` on `<button />`

```jsx
<label for="my-button" />
<button
  id="my-button"
  aria-label="create-button"
  name="createAwesomeness"
>
  <i
    className="fas fa-plus"
    aria-hidden="true"
    title="create the new awesome"
  />
</button>
```

test:

```jsx
const { getByLabelText } = render(<AwesomeForm />)

fireEvent.click(getByLabelText(/create-button/i))
```

## Fire Input Date

- [GH Issue](https://github.com/testing-library/react-testing-library/issues/337)

remember the browser stores the value as `yyyy-MM-dd` not `12/31/2019`!!

working version `https://codesandbox.io/s/rln7q07o0m`

## JEST-DOM Configuration

Provides support for `.toHaveTextContent` and other dom expects
in package.json

```json
"jest": {
  "setupFilesAfterEnv": [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each"
  ]
},
```

## Button Click Issues

use dispatchEvent instead

```javascript
cancelBtn.dispatchEvent(
  new MouseEvent('click', { bubbles: true, cancelable: true }),
)
```

## Test Hook With Initial Render Changes

```jsx
const wrapper = ({ children }) => (
  <AuthProvider>
    <MainProvider>{children}</MainProvider>
  </AuthProvider>
)

const { result, waitForNextUpdate } = renderHook(() => useCustomState(), {
  wrapper,
})
await waitForNextUpdate() // avoids `act`  warnings
expect(result.current).toHaveProperty('id')
```

## Await Queries

avoids the `an update was not wrapped in act()` warnings. Use `findBy*` instead of `queryBy*`

```javascript
const myText = await findByText('my custom text')
expect(myText).toBeTruthy()
```
