# REACT USE EFFECT

## Resources

- [React RoadMap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)
- [React Hooks KDodds Testing](https://kentcdodds.com/blog/how-to-test-custom-react-hooks?ck_subscriber_id=479255035)

## Features

- asynchronous so does not block browser paint

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
