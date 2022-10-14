# NEXTJS ROUTING

## Resources

- [Nextjs Routing Introduction](https://nextjs.org/docs/routing/introduction)
- [Nextjs next/router](https://nextjs.org/docs/api-reference/next/router)
- [Nextjs next/link](https://nextjs.org/docs/api-reference/next/link)

## Features

- folder based
- filename based
- nested
- dynamic
- fallback

## Custom Anchor Tag Styling

`Link` is only for use INSIDE the specific app - not across apps in turborepos

```jsx
<>
  <Link href='mylink'>
    <a className={classes.myClass}>Click Here</a>
  </Link>
</>
```
