# REACT USE EFFECT

## Resources

- [React RoadMap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)
- [React Hooks KDodds Testing](https://kentcdodds.com/blog/how-to-test-custom-react-hooks?ck_subscriber_id=479255035)

## Features
Allows actions to be taken on component renders, updates, or unmounts.
Covers component lifecycle of `mount`, `update`, and `unmount`

- asynchronous so does not block browser paint
- no dependencies means it runs on EVERY render
- empty `[]` dependencies means runs once on mount
- can specify state fields to dependency array for watching
- provides a `cleanup` return function for taking actions on unmount

## Examples

### Run on every render
```jsx
useEffect(() => {
  console.log(`Component rendered.`);
});
```

### Run only on mount
```jsx
useEffect(() => {
  console.log("Component did mount");
}, []);
```

### Clean up on unmount
```jsx
useEffect(() => {
  console.log("Component did mount OR update");

  // cleanup function
  return () => {
    console.log("Component will unmount");
  }
}, []);
```

### fetch api data with set # of retries
with exponential backoff as well
```jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);
  const MAX_RETRIES = 3;
  const BASE_DELAY = 1000; // Base delay of 1 second

  const delay = (retryCount) => {
    // Exponential backoff: 2^retryCount * BASE_DELAY
    return Math.min(2 ** retryCount * BASE_DELAY, 30000); // Cap at 30 seconds
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (retries < MAX_RETRIES) {
          const backoffDelay = delay(retries);
          console.log(`Retry attempt ${retries + 1} of ${MAX_RETRIES} after ${backoffDelay}ms`);
          
          // Wait for the backoff delay before retrying
          await new Promise(resolve => setTimeout(resolve, backoffDelay));
          setRetries(prevRetries => prevRetries + 1);
        } else {
          setError(err.message);
        }
      }
    };

    fetchData();
  }, [retries]); // Re-run effect when retries changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading... (Retry attempt {retries + 1} of {MAX_RETRIES})</div>;
  }

  return (
    <div>
      <h1>Data Fetched Successfully!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
```

### Async functions
React warns against `useEffect(async () = {...})`
- define the async function you need OUTSIDE useEffect
- define an async function INSIDE useEffect and call the above function
- do any setState / etc calls INSIDE the result from await inside useEffect

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
```

### Reuseable custom hook
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run effect when URL changes

  return { data, loading, error };
}

// Example usage:
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`https://api.example.com/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

## When To UseEffect

A useEffect is for making indirect function calls as a side-effect of another function.

example when a useEffect is not needed. All functions can be run directly as a
result of the click event

```tsx
function myComponent = () => {
  const onClickHandler = () => {
    if (playing === false) {
      const clip = new Clip(audioEngine, audioBuffer)
      clip?.node?.connect(audioEngine.destination)
      clip?.play(0)
      setClip(clip)
      setPlaying(true)
    } else {
      clip?.stop(0)
      setPlaying(false)
    }
  }

  return (
    <section className='tape'>
      <audio src='outfoxing.mp3' crossOrigin='anonymous'></audio>
      <button
        className='tape-controls-play'
        data-playing={playing ?? false}
        role='switch'
        aria-checked='false'
        onClick={onClickHandler}
      >
        <span>Play/Pause</span>
      </button>
    </section>
  )
}
```

## isMounted Technique

- [GH Utility Module For this](https://github.com/jmlweb/isMounted)

only needs to be used AFTER an `await` statement checking `if (isMounted)` or
in the `catch` block of a try catch like `if (isMounted) console.log(error)`
