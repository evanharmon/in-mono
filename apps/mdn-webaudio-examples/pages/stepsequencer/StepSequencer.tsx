import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import wavetable from './wavetable.js'
import styles from '../../styles/StepSequencer.module.css'
import * as constants from './constants'
import * as types from './types'

let AudioContext =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : null
let audioContext: AudioContext | null = null

if (AudioContext !== null) {
  audioContext = new AudioContext()
}

let requestAnimationFrame =
  typeof window !== 'undefined'
    ? window.requestAnimationFrame || window.webkitRequestAnimationFrame
    : null

const useIsomorphicUseLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect


let dtmf: AudioBuffer
// need a way to track what instruments are played on what sequencer steps
// to avoid using tons of Refs, store parameters in step
// ex. sweepGrid.set(0, {})
// can support parameter locks if values set in object
const sweepGrid = new Map()
const pulseGrid = new Map()
const noiseGrid = new Map()
const sampleGrid = new Map()
let lastNoteDrawn = 3
let file = 'dtmf.mp3'
let paramLocksOn = false

// Scheduler
let currentNote = 0
let nextNoteTime = 0.0
let timerId: number
let scheduleAheadTime = constants.DEFAULT_SCHEDULE_AHEAD_TIME
let lookAhead = constants.DEFAULT_LOOKAHEAD
// const notesInQueue: Array<types.NoteQueueProps> = [{ note: 0, time: 0 }]
const notesInQueue: Array<types.NoteQueueProps> = []

// global params
const wave =
  typeof audioContext !== 'undefined'
    ? audioContext?.createPeriodicWave(wavetable?.real, wavetable?.imag)
    : null
let globalAttackTime = constants.DEFAULT_ATTACK
let globalReleaseTime = constants.DEFAULT_RELEASE
let sweepLength = constants.DEFAULT_SWEEP_LENGTH
function playSweep(time: number, params: types.playSweepParams) {
  if (!audioContext) return
  const osc = audioContext.createOscillator()
  osc.setPeriodicWave(params.wave)
  osc.frequency.value = 380

  const sweepEnv = audioContext.createGain()
  sweepEnv.gain.cancelScheduledValues(time)
  sweepEnv.gain.setValueAtTime(0, time)
  sweepEnv.gain.linearRampToValueAtTime(1, time + params.attackTime)
  sweepEnv.gain.linearRampToValueAtTime(
    0,
    time + params.sweepLength - params.releaseTime,
  )

  osc.connect(sweepEnv).connect(audioContext.destination)
  osc.start(time)
  osc.stop(time + params.sweepLength)
}

let globalPulseHz = constants.DEFAULT_PULSE_HZ
let globalPulseTime = constants.DEFAULT_PULSE_TIME
let globalLfoHz = constants.DEFAULT_LFO_HZ
function playPulse(time: number, params: types.playPulseParams) {
  if (!audioContext) return
  const osc = audioContext.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = params.pulseHz

  const amp = audioContext.createGain()
  amp.gain.value = 1

  const lfo = audioContext.createOscillator()
  lfo.type = 'square'
  lfo.frequency.value = params.lfoHz

  lfo.connect(amp.gain)
  osc.connect(amp).connect(audioContext.destination)
  lfo.start()
  osc.start(time)
  osc.stop(time + params.pulseTime)
}

let globalNoiseDuration = constants.DEFAULT_NOISE_DURATION
let globalBandHz = constants.DEFAULT_BAND_HZ
function playNoise(time: number, params: types.playNoiseParams) {
  if (!audioContext) return
  const sampleRate = audioContext.sampleRate
  const bufferSize = sampleRate * params.noiseDuration
  const buffer = audioContext.createBuffer(1, bufferSize, sampleRate)
  const data = buffer.getChannelData(0)

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1
  }

  const noise = audioContext.createBufferSource()
  noise.buffer = buffer

  const bandpass = audioContext.createBiquadFilter()
  bandpass.type = 'bandpass'
  bandpass.frequency.value = params.bandHz

  noise.connect(bandpass).connect(audioContext.destination)
  noise.start(time)
}

async function getFile(
  ctx: AudioContext,
  filepath: string,
): Promise<AudioBuffer> {
  const response = await fetch(filepath)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer)

  return audioBuffer
}

let globalSamplePlaybackRate = constants.DEFAULT_SAMPLE_PLAYBACK_RATE
function playSample(
  time: number,
  params: types.playSampleParams,
): AudioBufferSourceNode | null {
  if (!audioContext || !params.audioBuffer) return null
  const sampleSource = audioContext.createBufferSource()
  sampleSource.buffer = params.audioBuffer
  sampleSource.playbackRate.value = params.playbackRate
  sampleSource.connect(audioContext.destination)
  sampleSource.onended = () => sampleSource.disconnect()
  sampleSource.start(time)

  return sampleSource
}

// BEGIN: SCHEDULING
let globalTempo = constants.DEFAULT_BPM // hacky but i don't want to pass setBPM all the way here
function nextNote() {
  const secondsPerBeat = 60.0 / globalTempo

  nextNoteTime += secondsPerBeat

  currentNote++
  if (currentNote === 4) {
    currentNote = 0
  }
}

function scheduleNote(
  note: number,
  time: number,
  params: types.schedulerParams,
) {
  notesInQueue.push({ note: note, time: time })
  // console.log(`note`, note, ` time `, time)

  const sweepNoteParams = params?.sweepGrid?.get(note)
  if (typeof sweepNoteParams !== 'undefined') {
    const globalParams = {
      attackTime: globalAttackTime,
      releaseTime: globalReleaseTime,
      wave: wave,
      sweepLength: constants.DEFAULT_SWEEP_LENGTH,
    }
    const fullParams = paramLocksOn === true ? {
      globalParams, ...sweepNoteParams
    } : globalParams
    playSweep(time, fullParams as types.playSweepParams)
  }

  const pulseNoteParams = params?.pulseGrid?.get(note)
  if (typeof pulseNoteParams !== 'undefined') {
    const globalParams = {
      pulseHz: globalPulseHz,
      pulseTime: globalPulseTime,
      lfoHz: globalLfoHz
    }
    const fullParams = paramLocksOn === true ? {
      globalParams, ...pulseNoteParams
    } : globalParams
    playPulse(time, fullParams as types.playPulseParams)
  }

  const noiseNoteParams = params?.noiseGrid?.get(note)
  if (typeof noiseNoteParams !== 'undefined') {
    const globalParams = {
      noiseDuration: globalNoiseDuration,
      bandHz: globalBandHz,
    }
    const fullParams = paramLocksOn === true ? {
      globalParams, ...noiseNoteParams
    } : globalParams
    playNoise(time, fullParams as types.playNoiseParams)
  }

  const sampleNoteParams = params?.sampleGrid?.get(note)
  if (typeof sampleNoteParams !== 'undefined') {
    // diff audioBuffer per note not supported yet
    const globalParams = {
      playbackRate: globalSamplePlaybackRate,
      audioBuffer: dtmf
    }
    const fullParams = paramLocksOn === true ? {
      globalParams, ...sampleNoteParams
    } : globalParams
    playSample(time, fullParams as types.playSampleParams)
  }
}

async function scheduler(params: types.schedulerParams) {
  if (!audioContext || audioContext.state !== 'running') return
  // schedule all notes that need to play before next Interval
  // advance pointer as well
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    scheduleNote(currentNote, nextNoteTime, params)
    nextNote()
  }
  timerId = window.setTimeout(scheduler, lookAhead, params)
}

// END: SCHEDULING

export default function StepSequencer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // voice settings
  const [bpm, setBpm] = useState(globalTempo)
  const [attack, setAttack] = useState(globalAttackTime)
  const [release, setRelease] = useState(globalReleaseTime)
  const [pulseHz, setPulseHz] = useState(globalPulseHz)
  const [lfoHz, setLfoHz] = useState(globalLfoHz)
  const [noiseDuration, setNoiseDuration] = useState(
    globalNoiseDuration
  )
  const [bandHz, setBandHz] = useState(globalBandHz)
  const [samplePlaybackRate, setSamplePlaybackRate] = useState(
    globalSamplePlaybackRate
  )

  const sweepPadsRef = useRef<HTMLDivElement | null>(null)
  const pulsePadsRef = useRef<HTMLDivElement | null>(null)
  const noisePadsRef = useRef<HTMLDivElement | null>(null)
  const samplePadsRef = useRef<HTMLDivElement | null>(null)
  const frameIdRef = useRef<number>()

  function renderFrame() {
    const sweepPads = sweepPadsRef?.current
    const pulsePads = pulsePadsRef?.current
    const noisePads = noisePadsRef?.current
    const samplePads = samplePadsRef?.current

    if (
      sweepPadsRef === null ||
      pulsePadsRef === null ||
      noisePadsRef === null ||
      samplePadsRef === null
    )
      return

    if (!audioContext) return

    let drawNote = lastNoteDrawn
    const currentTime = audioContext.currentTime

    while (notesInQueue.length && notesInQueue[0].time < currentTime) {
      drawNote = notesInQueue[0].note
      notesInQueue.splice(0, 1) // remove note
    }

    const sweepPadsChildren = sweepPads?.children
    const pulsePadsChildren = pulsePads?.children
    const noisePadsChildren = noisePads?.children
    const samplePadsChildren = samplePads?.children
    if (
      !sweepPadsChildren ||
      !pulsePadsChildren ||
      !noisePadsChildren ||
      !samplePadsChildren
    )
      return

    // only draw if note has moved
    if (lastNoteDrawn !== drawNote) {
      const sweepPadLastNoteDrawn = sweepPadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      sweepPadLastNoteDrawn.style.borderColor = 'hsla(0, 0%, 10%, 1)'
      const sweepPadDrawNote = sweepPadsChildren[drawNote] as HTMLElement
      sweepPadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const pulsePadLastNoteDrawn = pulsePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      pulsePadLastNoteDrawn.style.borderColor = 'hsla(0, 0%, 10%, 1)'
      const pulsePadDrawNote = pulsePadsChildren[drawNote] as HTMLElement
      pulsePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const noisePadLastNoteDrawn = noisePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      noisePadLastNoteDrawn.style.borderColor = 'hsla(0, 0%, 10%, 1)'
      const noisePadDrawNote = noisePadsChildren[drawNote] as HTMLElement
      noisePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const samplePadLastNoteDrawn = samplePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      samplePadLastNoteDrawn.style.borderColor = 'hsla(0, 0%, 10%, 1)'
      const samplePadDrawNote = samplePadsChildren[drawNote] as HTMLElement
      samplePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      lastNoteDrawn = drawNote
    }
  }

  useIsomorphicUseLayoutEffect(() => {
    if (requestAnimationFrame === null) return
    if (isPlaying === false) return

    function animate() {
      if (requestAnimationFrame === null) return

      if (
        sweepPadsRef === null ||
        pulsePadsRef === null ||
        noisePadsRef === null ||
        samplePadsRef === null
      )
        return

      renderFrame()
      frameIdRef.current = requestAnimationFrame(animate)
    }
    frameIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameIdRef?.current) cancelAnimationFrame(frameIdRef.current)
    }
  }, [isPlaying])

  useEffect(() => {
    if (!audioContext) return

    async function setupSample(ctx: AudioContext, filePath: string) {
      dtmf = await getFile(ctx, filePath)
      setIsLoading(false)
    }
    setupSample(audioContext, file)
  }, [])

  // Event Handlers
  function onBpmChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event?.target?.value)
    setBpm(val)
    globalTempo = val
  }
  async function onPlayButtonClick() {
    if (!audioContext) return
    if (audioContext.state === 'suspended') await audioContext.resume()

    if (isPlaying) {
      window.clearTimeout(timerId)
    } else {
      currentNote = 0
      nextNoteTime = audioContext.currentTime
      scheduler({
        sweepGrid,
        pulseGrid,
        noiseGrid,
        sampleGrid,
        audioBuffer: dtmf,
      })
    }
    setIsPlaying(!isPlaying)
  }
  function onAttackChange(event: ChangeEvent<HTMLInputElement>) {
    const numVal = Number(event.target.value)
    setAttack(numVal)
    globalAttackTime = numVal
  }
  function onReleaseChange(event: ChangeEvent<HTMLInputElement>) {
    const numVal = Number(event.target.value)
    setRelease(numVal)
    globalReleaseTime = numVal
  }
  function onPadClick(
    e: MouseEvent<HTMLButtonElement>,
    voice: number,
    note: number,
  ) {
    const chk = e?.currentTarget?.getAttribute('aria-checked')
    e.currentTarget.setAttribute(
      'aria-checked',
      chk === 'false' ? 'true' : 'false',
    )

    switch (voice) {
      case 0:
        sweepGrid.get(note) === undefined
          ? sweepGrid.set(note, {
            attackTime: attack,
            releaseTime: release
          })
          : sweepGrid.delete(note)
        break
      case 1:
        pulseGrid.get(note) === undefined
          ? pulseGrid.set(note, {
            pulseHz,
            pulseTime: constants.DEFAULT_PULSE_TIME,
            lfoHz,
          })
          : pulseGrid.delete(note)
        break
      case 2:
        noiseGrid.get(note) === undefined
          ? noiseGrid.set(note, {
            noiseDuration,
            bandHz,
          })
          : noiseGrid.delete(note)
        break
      case 3:
        sampleGrid.get(note) === undefined
          ? sampleGrid.set(note, {
            playbackRate: samplePlaybackRate,
            audioBuffer: dtmf
          })
          : sampleGrid.delete(note)
        break
      default:
        break
    }
  }
  function onPulseHzChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event.target.value)
    setPulseHz(val)
    globalPulseHz = val

  }
  function onLfoHzChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event.target.value)
    setLfoHz(val)
    globalLfoHz = val
  }
  function onNoiseDurationChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event.target.value)
    setNoiseDuration(val)
    globalNoiseDuration = val
  }
  function onBandHzChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event.target.value)
    setBandHz(val)
    globalBandHz = val
  }
  function onSamplePlaybackRateChange(event: ChangeEvent<HTMLInputElement>) {
    const val = Number(event.target.value)
    setSamplePlaybackRate(val)
    globalSamplePlaybackRate = val
  }

  return (
    <>
      <style global jsx>{`
        body {
          background-color: var(--white);
          padding: 4vmax;
          font-size: 120%;
          font-family: 'Helvetica';
          color: var(--black);
        }

        h2 {
          font-size: 1.2em;
        }
      `}</style>
      {isLoading ? (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      ) : null}

      <div className={styles.sequencer}>
        <section className={styles['controls-main']}>
          <h1>ModemDN</h1>
          <label htmlFor='bpm'>BPM</label>
          <input
            className={styles['inputs-range']}
            type='range'
            min={constants.MIN_BPM}
            max={constants.MAX_BPM}
            defaultValue={bpm}
            step={constants.DEFAULT_BPM_STEP}
            onChange={onBpmChange}
          />
          <span id='bpmval'>{bpm}</span>
          <button
            className={styles['button-play']}
            data-playing={isPlaying}
            onClick={onPlayButtonClick}
          >
            Play
          </button>
        </section>

        <div id='track-one'>
          <section className={styles.tracks}>
            <h2>Sweep</h2>
            <section className={styles['controls']}>
              <label htmlFor='attack'>Att</label>
              <input
                className={styles['inputs-range']}
                type='range'
                name='attack'
                id='attack'
                min={constants.MIN_ADSR_RANGE}
                max={constants.MAX_ADSR_RANGE}
                defaultValue={attack}
                step={constants.DEFAULT_ADSR_STEP}
                onChange={onAttackChange}
              />
              <label htmlFor='release'>Rel</label>
              <input
                className={styles['inputs-range']}
                type='range'
                name='release'
                id='release'
                min={constants.MIN_ADSR_RANGE}
                max={constants.MAX_ADSR_RANGE}
                defaultValue={release}
                step={constants.DEFAULT_ADSR_STEP}
                onChange={onReleaseChange}
              />
            </section>

            <section ref={sweepPadsRef} className={styles['pads']}>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 0, 0)}
              >
                <span>Voice 1, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 0, 1)}
              >
                <span>Voice 1, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 0, 2)}
              >
                <span>Voice 1, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 0, 3)}
              >
                <span>Voice 1, Note 4</span>
              </button>
            </section>
          </section>

          <section id='track-two' className={styles.tracks}>
            <h2>Pulse</h2>
            <section className={styles['controls']}>
              <label htmlFor='pulseHz'>Hz</label>
              <input
                className={styles['inputs-range']}
                name='hz'
                id='hz'
                type='range'
                min={constants.MIN_PULSE_HZ}
                max={constants.MAX_PULSE_HZ}
                defaultValue={pulseHz}
                step={constants.DEFAULT_PULSE_HZ_STEP}
                onChange={onPulseHzChange}
              />
              <label htmlFor='lfo'>LFO</label>
              <input
                className={styles['inputs-range']}
                name='lfo'
                id='lfo'
                type='range'
                min={constants.MIN_LFO}
                max={constants.MAX_LFO}
                defaultValue={lfoHz}
                step={constants.DEFAULT_LFO_STEP}
                onChange={onLfoHzChange}
              />
            </section>

            <section ref={pulsePadsRef} className={styles['pads']}>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 1, 0)}
              >
                <span>Voice 2, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 1, 1)}
              >
                <span>Voice 2, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 1, 2)}
              >
                <span>Voice 2, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 1, 3)}
              >
                <span>Voice 2, Note 4</span>
              </button>
            </section>
          </section>

          <section id='track-three' className={styles.tracks}>
            <h2>Noise</h2>
            <section className={styles['controls']}>
              <label htmlFor='duration'>Dur</label>
              <input
                className={styles['inputs-range']}
                name='duration'
                id='duration'
                type='range'
                min={constants.MIN_NOISE_DURATION}
                max={constants.MAX_NOISE_DURATION}
                defaultValue={noiseDuration}
                step={constants.DEFAULT_NOISE_DURATION_STEP}
                onChange={onNoiseDurationChange}
              />
              <label htmlFor='band'>Band</label>
              <input
                className={styles['inputs-range']}
                name='band'
                id='band'
                type='range'
                min={constants.MIN_BAND}
                max={constants.MAX_BAND}
                defaultValue={bandHz}
                step={constants.DEFAULT_BAND_HZ_STEP}
                onChange={onBandHzChange}
              />
            </section>

            <section ref={noisePadsRef} className={styles['pads']}>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 2, 0)}
              >
                <span>Voice 3, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 2, 1)}
              >
                <span>Voice 3, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 2, 2)}
              >
                <span>Voice 3, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 2, 3)}
              >
                <span>Voice 3, Note 4</span>
              </button>
            </section>
          </section>

          <section id='track-four' className={styles.tracks}>
            <h2>DTMF</h2>
            <section className={styles['controls']}>
              <label htmlFor='rate'>Rate</label>
              <input
                className={styles['inputs-range']}
                name='rate'
                id='rate'
                type='range'
                min={constants.MIN_RATE}
                max={constants.MAX_RATE}
                defaultValue={samplePlaybackRate}
                step={constants.DEFAULT_SAMPLE_PLAYBACK_RATE_STEP}
                onChange={onSamplePlaybackRateChange}
              />
            </section>

            <section ref={samplePadsRef} className={styles['pads']}>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 3, 0)}
              >
                <span>Voice 4, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 3, 1)}
              >
                <span>Voice 4, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 3, 2)}
              >
                <span>Voice 4, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={e => onPadClick(e, 3, 3)}
              >
                <span>Voice 4, Note 4</span>
              </button>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}
