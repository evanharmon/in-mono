import {
  ChangeEvent,
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

const wave =
  typeof audioContext !== 'undefined'
    ? audioContext?.createPeriodicWave(wavetable?.real, wavetable?.imag)
    : null

let dtmf: AudioBuffer
// need a way to track what instruments are played on what sequencer steps
// to avoid using tons of Refs, store parameters in step
// ex. sweepGrid.set(0, {})
const sweepGrid = new Map()
const pulseGrid = new Map()
const noiseGrid = new Map()
const sampleGrid = new Map()
let lastNoteDrawn = 3
let file = 'dtmf.mp3'

// Scheduler
let currentNote: number
let nextNoteTime: number
let timerId: number
let scheduleAheadTime = constants.DEFAULT_SCHEDULE_AHEAD_TIME
let lookAhead = constants.DEFAULT_LOOKAHEAD
const notesInQueue: Array<types.NoteQueueProps> = []

function playSweep(params: types.playSweepParams) {
  const osc = params.ctx.createOscillator()
  osc.setPeriodicWave(params.wave)
  osc.frequency.value = 380

  const sweepEnv = params.ctx.createGain()
  sweepEnv.gain.cancelScheduledValues(params.time)
  sweepEnv.gain.setValueAtTime(0, params.time)
  sweepEnv.gain.linearRampToValueAtTime(1, params.time + params.attackTime)
  sweepEnv.gain.linearRampToValueAtTime(
    0,
    params.time + params.sweepLength - params.releaseTime,
  )

  osc.connect(sweepEnv).connect(params.ctx.destination)
  osc.start(params.time)
  osc.stop(params.time + params.sweepLength)
}

function playPulse(params: types.playPulseParams) {
  const osc = params.ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = params.pulseHz

  const amp = params.ctx.createGain()
  amp.gain.value = 1

  const lfo = params.ctx.createOscillator()
  lfo.type = 'square'
  lfo.frequency.value = params.lfoHz

  lfo.connect(amp.gain)
  osc.connect(amp).connect(params.ctx.destination)
  lfo.start()
  osc.start(params.time)
  osc.stop(params.time + params.pulseTime)
}

function playNoise(params: types.playNoiseParams) {
  const sampleRate = params.ctx.sampleRate
  const bufferSize = sampleRate + params.noiseDuration
  const buffer = params.ctx.createBuffer(1, bufferSize, sampleRate)
  const data = buffer.getChannelData(0)

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1
  }

  const noise = params.ctx.createBufferSource()
  noise.buffer = buffer

  const bandpass = params.ctx.createBiquadFilter()
  bandpass.type = 'bandpass'
  bandpass.frequency.value = params.bandHz

  noise.connect(bandpass).connect(params.ctx.destination)
  noise.start(params.time)
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

function playSample(params: types.playSampleParams): AudioBufferSourceNode {
  const sampleSource = params.ctx.createBufferSource()
  sampleSource.buffer = params.audioBuffer
  sampleSource.playbackRate.value = params.playbackRate
  sampleSource.connect(params.ctx.destination)
  sampleSource.start(params.time)

  return sampleSource
}

// BEGIN: SCHEDULING
function nextNote() {
  const secondsPerBeat = 60.0

  nextNoteTime += secondsPerBeat

  currentNote++
  if (currentNote === 4) {
    currentNote = 0
  }
}

function scheduler(params: types.schedulerParams) {
  // schedule all notes that need to play before next Interval
  // advance pointer as well
  while (
    params.nextNoteTime <
    params.ctx.currentTime + params.scheduleAheadTime
  ) {
    scheduleNote(params)
    nextNote()
  }
  params.timerId = window.setTimeout(scheduler, params.lookAhead)
}

function scheduleNote(params: types.schedulerParams) {
  params.notesInQueue.push({ note: params.noteBeatNumber, time: params.time })

  const sweepNoteParams = {
    ...params.sweepGrid.get(params.noteBeatNumber),
    wave: wave,
    sweepLength: constants.DEFAULT_SWEEP_LENGTH,
  }
  if (typeof sweepNoteParams !== 'undefined')
    playSweep(sweepNoteParams as types.playSweepParams)

  const pulseNoteParams = params.pulseGrid.get(params.noteBeatNumber)
  if (typeof pulseNoteParams !== 'undefined')
    playPulse(pulseNoteParams as types.playPulseParams)

  const noiseNoteParams = params.noiseGrid.get(params.noteBeatNumber)
  if (typeof noiseNoteParams !== 'undefined')
    playNoise(noiseNoteParams as types.playNoiseParams)

  const sampleNoteParams = params.sampleGrid.get(params.noteBeatNumber)
  if (typeof sampleNoteParams !== 'undefined')
    playSample(sampleNoteParams as types.playSampleParams)
}

// END: SCHEDULING

export default function StepSequencer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // voice settings
  const [bpm, setBpm] = useState(constants.DEFAULT_BPM)
  const [attack, setAttack] = useState(constants.DEFAULT_ATTACK)
  const [release, setRelease] = useState(constants.DEFAULT_RELEASE)
  const [pulseHz, setPulseHz] = useState(constants.DEFAULT_PULSE_HZ)
  const [lfo, setLfo] = useState(constants.DEFAULT_LFO)
  const [noiseDuration, setNoiseDuration] = useState(
    constants.DEFAULT_NOISE_DURATION,
  )
  const [bandHz, setBandHz] = useState(constants.DEFAULT_BAND_HZ)
  const [samplePlaybackRate, setSamplePlaybackRate] = useState(
    constants.DEFAULT_SAMPLE_PLAYBACK_RATE,
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
      sweepPadLastNoteDrawn.style.borderColor = 'hslaI(0, 0%, 10%, 1)'
      const sweepPadDrawNote = sweepPadsChildren[drawNote] as HTMLElement
      sweepPadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const pulsePadLastNoteDrawn = pulsePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      pulsePadLastNoteDrawn.style.borderColor = 'hslaI(0, 0%, 10%, 1)'
      const pulsePadDrawNote = pulsePadsChildren[drawNote] as HTMLElement
      pulsePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const noisePadLastNoteDrawn = noisePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      noisePadLastNoteDrawn.style.borderColor = 'hslaI(0, 0%, 10%, 1)'
      const noisePadDrawNote = noisePadsChildren[drawNote] as HTMLElement
      noisePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      const samplePadLastNoteDrawn = samplePadsChildren[
        lastNoteDrawn
      ] as HTMLElement
      samplePadLastNoteDrawn.style.borderColor = 'hslaI(0, 0%, 10%, 1)'
      const samplePadDrawNote = samplePadsChildren[drawNote] as HTMLElement
      samplePadDrawNote.style.borderColor = 'hsla(49, 99%, 50%, 1)'

      lastNoteDrawn = drawNote
    }
  }

  useIsomorphicUseLayoutEffect(() => {
    if (requestAnimationFrame === null) return

    const animate = () => {
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
  }, [])

  useEffect(() => {
    if (!audioContext) return

    async function setupSample(ctx: AudioContext, filePath: string) {
      dtmf = await getFile(ctx, filePath)
      setIsLoading(false)
    }
    setupSample(audioContext, file)
  }, [])

  useEffect(() => {
    async function initPlay() {
      if (!audioContext) return

      if (audioContext.state === 'suspended') await audioContext.resume()

      currentNote = 0
      nextNoteTime = audioContext.currentTime
      scheduler({
        ctx: audioContext,
        noteBeatNumber: currentNote,
        timerId,
        time: nextNoteTime,
        notesInQueue,
        lookAhead,
        nextNoteTime,
        sweepGrid,
        pulseGrid,
        noiseGrid,
        sampleGrid,
        currentNote,
        scheduleAheadTime,
        audioBuffer: dtmf,
      })
    }

    if (isPlaying) {
      initPlay()
    } else {
      window.clearTimeout(timerId)
    }
  }, [isPlaying])

  // Event Handlers
  function onBpmChange(event: ChangeEvent<HTMLInputElement>) {
    setBpm(parseInt(event?.target?.value))
  }
  function onPlayButtonClick() {
    setIsPlaying(!isPlaying)
  }
  function onAttackChange(event: ChangeEvent<HTMLInputElement>) {
    setAttack(Number(event.target.value))
  }
  function onReleaseChange(event: ChangeEvent<HTMLInputElement>) {
    setRelease(Number(event.target.value))
  }
  function onPadClick(voice: number, note: number) {} // TODO implement
  function onPulseHzChange(event: ChangeEvent<HTMLInputElement>) {
    setPulseHz(Number(event.target.value))
  }
  function onLfoChange(event: ChangeEvent<HTMLInputElement>) {
    setLfo(Number(event.target.value))
  }
  function onNoiseDurationChange(event: ChangeEvent<HTMLInputElement>) {
    setNoiseDuration(parseFloat(event?.target?.value))
  }
  function onBandHzChange(event: ChangeEvent<HTMLInputElement>) {
    setBandHz(parseInt(event?.target?.value))
  }
  function onSamplePlaybackRateChange(event: ChangeEvent<HTMLInputElement>) {
    setSamplePlaybackRate(parseFloat(event?.target?.value))
  }

  return (
    <>
      <style global jsx>{`
        body {
          background-color: var(--white);
          padding: 4vmax;
          font-size: 120%;
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
          <h1>modemDN</h1>
          <label htmlFor='bpm'>BPM</label>
          <input
            className={styles['input-range']}
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
            data-playing='false'
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
                className={styles['input-range']}
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
                className={styles['input-range']}
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
                onClick={() => onPadClick(0, 0)}
              >
                <span>Voice 1, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(0, 1)}
              >
                <span>Voice 1, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(0, 2)}
              >
                <span>Voice 1, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(0, 3)}
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
                className={styles['input-range']}
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
                className={styles['input-range']}
                name='lfo'
                id='lfo'
                type='range'
                min={constants.MIN_LFO}
                max={constants.MAX_LFO}
                defaultValue={lfo}
                step={constants.DEFAULT_LFO_STEP}
                onChange={onLfoChange}
              />
            </section>

            <section ref={pulsePadsRef} className={styles['pads']}>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(1, 0)}
              >
                <span>Voice 2, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(1, 1)}
              >
                <span>Voice 2, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(1, 2)}
              >
                <span>Voice 2, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(1, 3)}
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
                className={styles['input-range']}
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
                className={styles['input-range']}
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
                onClick={() => onPadClick(2, 0)}
              >
                <span>Voice 3, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(2, 1)}
              >
                <span>Voice 3, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(2, 2)}
              >
                <span>Voice 3, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(2, 3)}
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
                className={styles['input-range']}
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
                onClick={() => onPadClick(3, 0)}
              >
                <span>Voice 4, Note 1</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(3, 1)}
              >
                <span>Voice 4, Note 2</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(3, 2)}
              >
                <span>Voice 4, Note 3</span>
              </button>
              <button
                role='switch'
                aria-checked='false'
                onClick={() => onPadClick(3, 3)}
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
