import { ChangeEvent, useEffect, useState } from 'react'
import styles from '../../styles/AudioBasics.module.css'

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
export default function AudioBasics() {
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

  return (
    <>
      <div className={styles.boombox}>
        <div className={styles['boombox-handle']}></div>
        <div className={styles['boombox-body']}>
          <section className={styles['master-controls']}>
            <input
              type='range'
              id='volume'
              className={`
                ${styles['controls-input']}
                ${styles['control-volume']}
             `}
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
            <label
              className={`
                ${styles['control-volume-label']}
                `}
              htmlFor='volume'
            >
              VOL
            </label>

            <input
              type='range'
              id='panner'
              className={`
                ${styles['controls']}
                ${styles['controls-input']}
                ${styles['control-panner']}
                `}
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
            <label
              className={`
                ${styles['control-panner-label']}
              `}
              htmlFor='panner'
            >
              PAN
            </label>

            <button
              className={styles['control-power']}
              role='switch'
              aria-checked='false'
              data-power={power ?? 'off'}
              onClick={onPowerClickHandler}
            >
              <span className={`${styles['control-power-span']}`}>On/Off</span>
            </button>
          </section>

          <section className={styles['tape']}>
            <audio
              className={`
                ${styles.tape}
                ${styles['tape-audio']}
              `}
              src='outfoxing.mp3'
              crossOrigin='anonymous'
            ></audio>
            <button
              className={styles['tape-controls-play']}
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
