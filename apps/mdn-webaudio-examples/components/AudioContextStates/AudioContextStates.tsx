import { useEffect, useLayoutEffect, useRef, useState } from 'react'

let AudioContext =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : null
let requestAnimFrame =
  typeof window !== 'undefined'
    ? window.requestAnimationFrame || window.webkitRequestAnimationFrame
    : null

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function AudioContextStates() {
  const [audioState, setAudioState] = useState<string | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const pRef = useRef<HTMLParagraphElement | null>(null)
  const frameId = useRef<number>()

  const renderFrame = () => {
    if (pRef === null || pRef.current === null) return

    const currentTime = audioCtxRef?.current?.currentTime.toFixed(3)
    if (typeof currentTime === 'undefined') return
    pRef.current.textContent = currentTime
      ? `Current context time: ${currentTime}`
      : 'Current context time: No context exists'
  }

  useIsomorphicLayoutEffect(() => {
    if (requestAnimFrame === null) return

    const animate = () => {
      if (!pRef.current || requestAnimFrame === null) return
      renderFrame()
      frameId.current = requestAnimFrame(animate)
    }
    frameId.current = requestAnimFrame(renderFrame)

    return () => {
      if (frameId?.current) cancelAnimationFrame(frameId.current)
    }
  }, [])

  const onCreateContext = () => {
    if (AudioContext === null) return

    if (
      audioCtxRef.current !== null &&
      audioCtxRef?.current?.state !== 'closed'
    )
      return

    const audioCtx = new AudioContext()
    audioCtxRef.current = audioCtx

    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    oscillator.type = 'square'
    oscillator.frequency.value = 100
    oscillator.start(0)

    gainNode.gain.value = 0.1

    audioCtx.onstatechange = () => setAudioState(audioCtx.state)
  }

  const onSuspendContext = () => {
    const audioCtx = audioCtxRef.current
    if (audioCtx === null) return

    if (audioCtx.state === 'running') {
      audioCtx.suspend()
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume()
    }
  }

  const onStopContext = () => {
    const audioCtx = audioCtxRef.current
    if (audioCtx === null || audioCtx.state === 'closed') return

    audioCtx.close()
  }

  return (
    <>
      <style global jsx>{`
        body {
          font-family: 'Times';
        }
      `}</style>
      <h1>AudioContext states demo</h1>
      <button
        disabled={audioState && audioState !== 'closed' ? true : false}
        onClick={onCreateContext}
      >
        Create context
      </button>
      <button
        disabled={audioState === null || audioState === 'closed'}
        onClick={onSuspendContext}
      >
        Suspend context
      </button>
      <button
        disabled={audioState === null || audioState === 'closed'}
        onClick={onStopContext}
      >
        Stop context
      </button>
      <p>current context state: {audioState ?? 'no audio context exists'}</p>
      <p ref={pRef}></p>
    </>
  )
}
