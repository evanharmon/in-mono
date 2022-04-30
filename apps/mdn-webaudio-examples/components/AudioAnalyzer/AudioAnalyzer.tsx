import { useLayoutEffect, useEffect, useRef } from 'react'
import styles from '../../styles/AudioAnalyzer.module.css'

let AudioContext =
  typeof window !== 'undefined'
    ? window.webkitAudioContext || window.AudioContext
    : null

let requestAnimationFrame =
  typeof window !== 'undefined'
    ? window.requestAnimationFrame || window.webkitRequestAnimationFrame
    : null
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

let sampleSize = 1024
let ctx: any

// AudioBufferSourceNode are one time use only!!!
// not using this setup function
// function setupAudioNodes(ctx: AudioContext) {
//     sourceNode = ctx.createBufferSource()
//     sourceNode.connect(ctx.destination)
// }

// create audioContext with long living summingNode
// decouples analyserNode from sourceNode which is single use
let audioContext: AudioContext | null
let summingGainNode: GainNode
let analyserNode: AnalyserNode
let amplitudeArray: Uint8Array
if (AudioContext !== null) {
  try {
    audioContext = new AudioContext()

    summingGainNode = audioContext.createGain()
    summingGainNode.gain.value = 1.0

    analyserNode = audioContext.createAnalyser()
    analyserNode.fftSize = sampleSize
    amplitudeArray = new Uint8Array(analyserNode.frequencyBinCount)

    summingGainNode.connect(audioContext.destination)
    summingGainNode.connect(analyserNode)
    // setupAudioNode functionality included in playSound()
    // setupAudioNodes(audioContext)
  } catch (error) {
    console.error('Web Audio API is not supported in this browser', error)
  }
}

let audioBuffer: AudioBuffer
async function loadSound(ctx: AudioContext, url: string) {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  // update global audioBuffer
  audioBuffer = await ctx.decodeAudioData(arrayBuffer)
  return audioBuffer
}

// create new AudioBufferSourceNode every time
let sourceNode: AudioBufferSourceNode
function playSound() {
  if (audioContext === null) return

  sourceNode = audioContext.createBufferSource()
  sourceNode.connect(summingGainNode)
  sourceNode.buffer = audioBuffer
  sourceNode.onended = () => sourceNode.disconnect()
  sourceNode.start(0)
}

function stopSound() {
  try {
    sourceNode.stop(0)
  } catch (e) {
    // cannot check if sourceNode is playing and calling stop if not playing will error
  }
}

let canvasWidth = 512
let canvasHeight = 256
let audioUrl = 'viper.mp3'
export default function AudioAnalyzer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const requestIdRef = useRef<number | null>(null)

  const renderFrame = () => {
    if (canvasRef === null || canvasRef.current === null) return

    analyserNode.getByteTimeDomainData(amplitudeArray)
    ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    for (let i = 0; i < amplitudeArray.length; i++) {
      let value = amplitudeArray[i] / 256
      let y = canvasHeight - canvasHeight * value - 1
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(i, y, 1, 1)
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (requestAnimationFrame == null) return

    const animate = () => {
      if (requestAnimationFrame == null) return

      if (canvasRef.current === null || requestIdRef.current === null) return

      renderFrame()
      requestIdRef.current = requestAnimationFrame(animate)
    }

    requestIdRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // remixjs / nextjs also render server side from same file.
    // do not attempt to access `window` object server side
    if (audioContext === null) return
    loadSound(audioContext, audioUrl)
  }, [])

  async function onPlayHandler() {
    if (audioContext === null) return

    if (audioContext.state === 'suspended') {
      await audioContext.resume()
    }
    playSound()
  }

  async function onStopHandler() {
    if (audioContext === null || audioContext.state === 'closed') return
    stopSound()
  }

  return (
    <main>
      <canvas
        ref={canvasRef}
        className={styles.analyzer}
        id={styles.canvas}
        width='512'
        height='256'
      ></canvas>
      <p className={styles.controls}>
        <button
          className={styles.controls}
          id={styles.button}
          onClick={onPlayHandler}
        >
          Start
        </button>
        &nbsp; &nbsp;
        <button
          className={styles.controls}
          id={styles.button}
          onClick={onStopHandler}
        >
          Stop
        </button>
      </p>
      <p className={styles.msg}></p>
    </main>
  )
}
