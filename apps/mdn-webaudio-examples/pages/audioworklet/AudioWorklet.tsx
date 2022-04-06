import { useEffect, useRef, useState } from 'react'

let AudioContext =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : undefined
let audioContext
let hissGenNode
let hissGainRangeDefault = 0.2
let oscGainRangeDefault = 0.1
let gainNode: GainNode
let hissGainParam

async function createHissProcessor() {
  if (typeof audioContext === 'undefined') {
    try {
      audioContext = new AudioContext()
    } catch (e) {
      console.log(e)
      return null
    }
  }

  let processorNode

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
  console.log(`calling start`)
  soundSource.start()

  hissGainParam = hissGenNode.parameters.get('gain')
  hissGainParam.setValueAtTime(hissGainRangeDefault, audioContext.currentTime)
}

async function toggleSound() {
  if (typeof audioContext === 'undefined') {
    await audioDemoStart()
  } else {
    await audioContext.close()
    audioContext = undefined
  }

  return
}

const styles = `
        body {
          font-family: helvetica, arial, sans-serif;
          margin: 2em;
        }

        h1 {
          font-style: bold;
          color: #330000;
        }

        .control-box {
          margin-top: 1em;
          width: 20em;
          border: 2px solid #333;
          border-radius: 2em;
          padding: 1em;
        }

        .control {
          margin-bottom: 1em;
        }

        .control input {
          width: 14em;
          left: 20em;
          float: right;
        }
      `

export default function AudioWorklet() {
  const [audioState, setAudioState] = useState<string | undefined>()

  const onClickToggle = async () => {
    await toggleSound()
    if (typeof audioContext === 'undefined') {
      setAudioState(undefined)
      return
    }

    audioContext.onstatechange = () =>
      setAudioState(audioContext?.state || undefined)
  }

  const onOscGainChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof audioContext === 'undefined') return
    if (typeof gainNode !== 'undefined') {
      gainNode.gain.setValueAtTime(event.target.value, audioContext.currentTime)
    }

    return
  }

  const onHissGainChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof audioContext === 'undefined') return

    if (typeof hissGainParam !== 'undefined') {
      hissGainParam.setValueAtTime(event.target.value, audioContext.currentTime)
    }
  }

  return (
    <>
      <style jsx>{styles}</style>
      <h1>AudioWorklet Demo</h1>
      <p>
        This page is a demo for the <code>AudioWorklet</code> API, which lets
        you process audio in the background using a worklet.
      </p>
      <button id='toggle' onClick={onClickToggle}>
        Toggle Sound
      </button>

      <div className='control-box'>
        <div className='control'>
          <span className='control-label'>
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
            disabled={typeof audioState === 'undefined' ? true : false}
          />
        </div>

        <div className='control'>
          <span className='control-label'>
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
            disabled={
              typeof audioState === 'undefined' || audioState !== 'running'
                ? true
                : false
            }
          />
        </div>
      </div>
    </>
  )
}
