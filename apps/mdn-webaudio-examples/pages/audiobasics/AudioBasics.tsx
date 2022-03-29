import React, { useEffect, useState } from 'react'
import styles from './AudioBasics.module.css'
import { ChangeEvent } from 'react'

let audioCtx: AudioContext
let audioBuffer: AudioBuffer
let summingNode: GainNode
let pannerNode: StereoPannerNode
let sourceNode: AudioBufferSourceNode

if (typeof window !== 'undefined') {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  summingNode = audioCtx.createGain()
  summingNode.gain.value = 1.0
  pannerNode = audioCtx.createStereoPanner()
  pannerNode.pan.value = 0
  summingNode.connect(pannerNode)
  pannerNode.connect(audioCtx.destination)
}

async function loadFile(file: string) {
  const arrayBuffer = await getRawBufferFromUrl(file)
  audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
}

async function getRawBufferFromUrl(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url)
  if (!res.ok) throw Error('failed to load sound')

  return res.arrayBuffer()
}

// What React should control
// create clip
// start and stop clip
// track state of clip playing
export default function AudioBasics<FC>() {
  // parked this work on power button
  // was not interested in taking the time to get the audioContext state correctly functioning
  // const [power, setPower] = useState<string | null>(null)
  const [power, setPower] = useState<string>('on')
  const [playing, setPlaying] = useState<boolean>(false)

  useEffect(() => {
    async function load(file: string) {
      await loadFile(file)
    }
    load('outfoxing.mp3')
  }, [])

  const play = () => {
    // this is hacky
    try {
      sourceNode = audioCtx.createBufferSource()
      sourceNode.buffer = audioBuffer
      sourceNode.connect(summingNode)
      sourceNode.start(0)
      // setClip(clip)
      setPlaying(true)
    } catch (err) {}
  }

  const stop = () => {
    // this is hacky
    try {
      sourceNode.stop(0)
      setPlaying(false)
    } catch (err) {}
  }

  const onClickHandler = () => {
    if (playing === false) {
      play()
    } else {
      stop()
    }
  }

  const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value
    summingNode.gain.value = parseFloat(val)
  }

  const onPanChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value
    if (pannerNode) {
      pannerNode.pan.value = parseFloat(val)
    }
  }

  // this will log wrong because console.log will not show the state change
  const onPowerClickHandler = () => {
    const audioCtxState = audioCtx.state
    if (audioCtxState === 'closed') return

    // always hitting else state
    // investigate the audioEngine state behavior - does it start suspended?
    if (audioCtxState === 'running') {
      // audioEngine.suspend()
      console.log(`audio context is running`)
      setPower('on')
    } else {
      console.log(`audio context is NOT running`)
      audioCtx.resume()
      setPower('off')
    }
  }

  useEffect(() => {
    console.log(`useEffect log on power: ${power}`)
  }, [power])

  return (
    <>
      <div id='boombox'>
        <div className='boombox-handle'></div>
        <div className='boombox-body'>
          <section className='master-controls'>
            <input
              type='range'
              id='volume'
              className='control-volume'
              min='0'
              max='1'
              onChange={onVolumeChange}
              list='gain-vals'
              step='0.01'
              data-action='volume'
            />
            <datalist id='gain-vals'>
              <option value='0' label='min' />
              <option value='2' label='max' />
            </datalist>
            <label htmlFor='volume'>VOL</label>

            <input
              type='range'
              id='panner'
              className='control-panner'
              list='pan-vals'
              min='-1'
              max='1'
              defaultValue='0'
              onChange={onPanChange}
              step='0.01'
              data-action='panner'
            />
            <datalist id='pan-vals'>
              <option value='-1' label='left' />
              <option value='1' label='right' />
            </datalist>
            <label htmlFor='panner'>PAN</label>

            <button
              className='control-power'
              role='switch'
              aria-checked='false'
              data-power={power ?? 'off'}
              onClick={onPowerClickHandler}
            >
              <span>On/Off</span>
            </button>
          </section>

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
        </div>
      </div>
    </>
  )
}
