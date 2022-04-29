import { ChangeEvent, useState } from 'react'
import styles from '../../styles/AudioWorklet.module.css'

let AudioContext =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : null
let audioContext: AudioContext | null = null
let hissGenNode: any
let hissGainRangeDefault = 0.2
let oscGainRangeDefault = 0.1
let gainNode: GainNode
let hissGainParam: any

async function createHissProcessor() {
  if (AudioContext && !audioContext) {
    try {
      audioContext = new AudioContext()
    } catch (e) {
      console.log(e)
      return null
    }
  }

  let processorNode
  if (!audioContext || audioContext.state === 'closed') return

  try {
    processorNode = new AudioWorkletNode(audioContext, 'hiss-generator')
  } catch (e) {
    try {
      await audioContext.audioWorklet.addModule('hiss-generator.js')
      processorNode = new AudioWorkletNode(audioContext, 'hiss-generator')
    } catch (e) {
      console.log(e)
      return null
    }
  }

  await audioContext.resume()

  return processorNode
}

async function audioDemoStart() {
  hissGenNode = await createHissProcessor()

  if (typeof hissGenNode === 'undefined') {
    console.log('unable to create his processor')
    return
  }

  // createHissProcessor creates AudioContext
  if (!audioContext || audioContext.state === 'closed') return

  const soundSource = new OscillatorNode(audioContext)
  gainNode = audioContext.createGain()
  gainNode.gain.value = oscGainRangeDefault

  soundSource.type = 'square'
  soundSource.frequency.setValueAtTime(440, audioContext.currentTime)

  gainNode.gain.setValueAtTime(oscGainRangeDefault, audioContext.currentTime)

  soundSource
    .connect(gainNode)
    .connect(hissGenNode)
    .connect(audioContext.destination)

  soundSource.start()

  hissGainParam = hissGenNode.parameters.get('gain')
  hissGainParam.setValueAtTime(hissGainRangeDefault, audioContext.currentTime)
}

async function toggleSound() {
  if (!audioContext) {
    await audioDemoStart()
  } else {
    await audioContext.close()
    audioContext = null
  }

  return
}

export default function AudioWorklet() {
  const [audioState, setAudioState] = useState<string | null>(null)

  async function onClickToggle() {
    await toggleSound()
    if (!audioContext) {
      setAudioState(null)
      return
    }

    audioContext.onstatechange = () =>
      setAudioState(audioContext?.state || null)
  }

  function onOscGainChange(event: ChangeEvent<HTMLInputElement>) {
    if (!audioContext || audioContext.state === 'closed') return

    if (typeof gainNode !== 'undefined') {
      gainNode.gain.setValueAtTime(
        parseInt(event?.target?.value),
        audioContext.currentTime,
      )
    }

    return
  }

  const onHissGainChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!audioContext || audioContext.state === 'closed') return

    if (typeof hissGainParam !== 'undefined') {
      hissGainParam.setValueAtTime(
        event?.target?.value,
        audioContext.currentTime,
      )
    }
  }

  return (
    <>
      <style global jsx>{`
        body {
          font-family: helvetica, arial, sans-serif;
          margin: 2em;
        }

        h1 {
          font-style: bold;
          color: #330000;
        }
      `}</style>
      <h1>AudioWorklet Demo</h1>
      <p>
        This page is a demo for the <code>AudioWorklet</code> API, which lets
        you process audio in the background using a worklet.
      </p>
      <button id='toggle' onClick={onClickToggle}>
        Toggle Sound
      </button>

      <div className={styles['control-box']}>
        <div className={styles['control']}>
          <span className={styles['control-label']}>
            <label htmlFor='osc-gain'>Oscillator gain:</label>
          </span>
          <input
            type='range'
            id='osc-gain'
            name='osc-gain'
            min='0.0'
            max='1.0'
            step='0.05'
            defaultValue={oscGainRangeDefault}
            onChange={onOscGainChange}
            disabled={!audioState ? true : false}
          />
        </div>

        <div className={styles['control']}>
          <span className={styles['control-label']}>
            <label htmlFor='hiss-gain'>Hiss gain:</label>
          </span>
          <input
            type='range'
            id='hiss-gain'
            name='hiss-gain'
            min='0.0'
            max='1.0'
            step='0.05'
            defaultValue={hissGainRangeDefault}
            onChange={onHissGainChange}
            disabled={!audioState || audioState !== 'running' ? true : false}
          />
        </div>
      </div>
    </>
  )
}
