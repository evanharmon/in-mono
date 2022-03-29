import { useEffect, useState } from 'react'

declare global {
  var audioCtx: AudioContext
}

let gainNode: GainNode
let sourceNode: AudioBufferSourceNode | null

let waveArray = new Float32Array(9)
waveArray[0] = 0.5
waveArray[1] = 1
waveArray[2] = 0.5
waveArray[3] = 0
waveArray[4] = 0.5
waveArray[5] = 1
waveArray[6] = 0.5
waveArray[7] = 0
waveArray[8] = 0.5

if (typeof window !== 'undefined') {
  window.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  gainNode = window.audioCtx.createGain()
  gainNode.gain.value = 0.5 // leave room for gain ramping
  gainNode.connect(window.audioCtx.destination)
}

async function loadFile(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url)
  const buf = await res.arrayBuffer()
  return buf
}

interface AudioFile {
  name: string
  buffer: AudioBuffer
}

export default function AudioParam() {
  const [files, setFiles] = useState<Array<AudioFile>>([])

  const onPlayClickHandler = (buffer: AudioBuffer) => {
    if (window.audioCtx.state !== 'running') window.audioCtx.resume()
    if (sourceNode) {
      try {
        sourceNode.stop()
      } catch (error) {}
    }
    sourceNode = window.audioCtx.createBufferSource()
    if (!sourceNode) return
    sourceNode.buffer = buffer
    sourceNode.connect(gainNode)
    // don't disconnect onended as the old sourcenode will disconnect the new one
    sourceNode.start(0)
  }

  const onTargetAtTimeClickHandler = (val: number, time = 1) => {
    if (val < -1 || val > 1) {
      console.warn('gain value must be between 0 and 1')
    }
    const currGain = gainNode.gain.value + val
    gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + time)
  }

  const onLinearRampClickHandler = (val: number, time = 2) => {
    if (val < 0) {
      console.warn('gain value must be between 0 and 1')
    }
    const currGain = val
    gainNode.gain.linearRampToValueAtTime(currGain, audioCtx.currentTime + time)
  }

  const onExpRampClickHandler = (val: number, time = 2) => {
    if (val < 0.01 || val > 1) {
      console.warn('gain value must be between 0.01 and 1')
    }
    const currGain = val
    gainNode.gain.exponentialRampToValueAtTime(
      currGain,
      audioCtx.currentTime + time,
    )
  }

  const onAtTimeClickHandler = (val: number, time = 1, coeff = 0.5) => {
    if (val < 0 || val > 1) {
      console.warn('gain value must be between 0 and 1')
    }
    const currGain = val
    gainNode.gain.setTargetAtTime(currGain, audioCtx.currentTime + time, coeff)
  }

  const onValueCurveClickHandler = (wave: Float32Array, coeff = 2) => {
    gainNode.gain.setValueCurveAtTime(wave, audioCtx.currentTime, 2)
  }

  const onClickPowerOn = () => {
    window.audioCtx.resume()
    console.log(`resuming audio engine`)
  }

  const onClickPowerOff = () => {
    window.audioCtx.suspend()
    console.log(`suspending audio engine`)
  }

  useEffect(() => {
    if (typeof window.audioCtx === 'undefined') return

    async function loadFileToAudioBuffer(url: string) {
      // safari doesn't support some file types like .ogg
      try {
        const arrayBuffer = await loadFile(url)
        const audioBuffer = await window.audioCtx.decodeAudioData(arrayBuffer)
        setFiles(prev => [...prev, { name: url, buffer: audioBuffer }])
      } catch (e) {
        console.log(e)
      }
    }
    if (files.length === 0) {
      loadFileToAudioBuffer('viper.ogg')
      loadFileToAudioBuffer('viper.mp3')
    }
  }, [])

  return (
    <>
      <h1>AudioParam Example</h1>
      {files.map((file, i) => (
        <button key={i} onClick={() => onPlayClickHandler(file.buffer)}>
          Play {file.name}
        </button>
      ))}
      <button onClick={onClickPowerOn}>Audio Engine On</button>
      <button onClick={onClickPowerOff}>Audio Engine Off</button>
      <div className='button-bar'>
        <button
          className='set-target-at-time-plus'
          onClick={() => onTargetAtTimeClickHandler(0.25, 1)}
        >
          Set gain +0.25 in 1 second
        </button>
        <button
          className='set-target-at-time-minus'
          onClick={() => onTargetAtTimeClickHandler(-0.25, 1)}
        >
          Set gain -0.25 in 1 second
        </button>
        <br />
        <button
          className='linear-ramp-plus'
          onClick={() => onLinearRampClickHandler(1, 2)}
        >
          Linear ramp gain to 1 in 2 seconds
        </button>
        <button
          className='linear-ramp-minus'
          onClick={() => onLinearRampClickHandler(0, 2)}
        >
          Linear ramp gain to 0 in 2 seconds
        </button>
        <br />
        <button
          className='exp-ramp-plus'
          onClick={() => onExpRampClickHandler(1, 2)}
        >
          Exponential ramp gain to 1 in 2 seconds
        </button>
        <button
          className='exp-ramp-minus'
          onClick={() => onExpRampClickHandler(0.01, 2)}
        >
          Exponential ramp gain to 0 in 2 seconds
        </button>
        <br />
        <button
          className='at-time-plus'
          onClick={() => onAtTimeClickHandler(1, 1)}
        >
          Target at time 1 in 1s
        </button>
        <button
          className='at-time-minus'
          onClick={() => onAtTimeClickHandler(0, 1)}
        >
          Target at time 0 in 1s
        </button>
        <br />
        <button
          className='value-curve'
          onClick={() => onValueCurveClickHandler(waveArray, 2)}
        >
          Value curve
        </button>
      </div>
    </>
  )
}
