let audioCtx: AudioContext
function createGlobalAudioContext() {
  if (typeof window === 'undefined') {
    console.log('cannot create audio context without window object');
    return
  }

  if (typeof audioCtx === 'undefined') {
    console.warn('audio context already created')
  }

  audioCtx = new (window.AudioContext || window.webkitAudioContext)()

  return
}

export default function AudioContextStates() {
  // TODO set button states
  const onCreateContext = () => {
    createGlobalAudioContext()

    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    oscillator.type = 'square'
    oscillator.frequency.value = 100
    oscillator.start(0)

    gainNode.gain.value = 0.1

    audioCtx.onstatechange = () => console.log(audioCtx.state)
  }

  const onSuspendContext = () => {
    if (typeof audioCtx === 'undefined') return

    if (audioCtx.state === 'running') audioCtx.suspend()

    if (audioCtx.state === 'suspended') audioCtx.resume()
  }

  const onStopContext = () => {
    if (typeof audioCtx === 'undefined') return

    if (audioCtx.state === 'closed') return
    audioCtx.close()
  }

  return (
    <>
      <h1>AudioContext states demo</h1>
      <button onClick={onCreateContext}>Create context</button>
      <button onClick={onSuspendContext}>Suspend context</button>
      <button onClick={onStopContext}>Stop context</button>
      <p>Current context time: No context exists</p>
    </>
  )
}
