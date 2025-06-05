# REACT AXIOS

## Features
using axios with react for api calls

## Advantages over Fetch
- builtin cross-site request forgery (CSRF) support
- allows request cancellation
- automatic JSON data transformation
- streamlined error handling

## Limitations
might use Fetch instead if you need the below
- no native support service workers, streams, caches

## Examples

### Get a list of posts
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
```

### Reusable Axios instances
good for setting default configurations
```jsx
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})
```
