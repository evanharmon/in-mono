# NEXTJS ROUTING

## Resources

- [Nextjs Client Side Routing with next/link](https://nextjs.org/docs/api-reference/next/link)

## Features

- retains app state
- prefetches data off the page you'd navigate to on hover!
- can use `replace` to replace location

## Why not use an <a> tag?

example:

```html
<a href="/projects">Projects</a>
```

- the href triggers an actual HTTP call to load the new page
- all react app state is lost!

## Simple Link use

```javascript
import Link from 'next/link'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
```
