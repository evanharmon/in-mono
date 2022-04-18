import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import wavetable from './wavetable.js'

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

const DEFAULT_BPM = 120
const DEFAULT_BPM_STEP = 1
const MIN_BPM = 60
const MAX_BPM = 180
const DEFAULT_ADSR_STEP = 0.1
const DEFAULT_ATTACK = 0.2
const MIN_ADSR_RANGE = 0
const MAX_ADSR_RANGE = 1
const DEFAULT_RELEASE = 0.2

const DEFAULT_PULSE_HZ = 880
const DEFAULT_PULSE_HZ_STEP = 1
const MIN_PULSE_HZ = 660
const MAX_PULSE_HZ = 1320

const DEFAULT_LFO = 30
const DEFAULT_LFO_STEP = 1
const MIN_LFO = 20
const MAX_LFO = 40
const DEFAULT_NOISE_DURATION = 1
const DEFAULT_NOISE_DURATION_STEP = 0.1
const MIN_NOISE_DURATION = 0
const MAX_NOISE_DURATION = 2
const DEFAULT_BAND_HZ = 1000
const DEFAULT_BAND_HZ_STEP = 5
const MIN_BAND = 400
const MAX_BAND = 500
const DEFAULT_SAMPLE_PLAYBACK_RATE = 1
const DEFAULT_SAMPLE_PLAYBACK_RATE_STEP = 0.1
const MIN_RATE = 0.1
const MAX_RATE = 2
const DEFAULT_SWEEP_LENGTH = 2
const DEFAULT_LOOKAHEAD = 25.0
const DEFAULT_SCHEDULE_AHEAD_TIME = 0.1

const notesInQueue: Array<NoteQueueProps> = []
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
let scheduleAheadTime = DEFAULT_SCHEDULE_AHEAD_TIME
let lookAhead = DEFAULT_LOOKAHEAD

// NOTE: yes all the pad types could be made more generic
// I am being explicit here as it's a learning exercise
interface playSweepParams {
  ctx: AudioContext
  attackTime: number
  releaseTime: number
  wave: any
  time: number
  sweepLength: number
}

function playSweep(params: playSweepParams) {
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

interface playPulseParams {
  ctx: AudioContext
  pulseHz: number
  pulseTime: number
  lfoHz: number
  time: number
}

function playPulse(params: playPulseParams) {
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

interface playNoiseParams {
  ctx: AudioContext
  time: number
  noiseDuration: number
  bandHz: number
}

function playNoise(params: playNoiseParams) {
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

interface playSampleParams {
  ctx: AudioContext
  audioBuffer: AudioBuffer
  time: number
  playbackRate: number
}

function playSample(params: playSampleParams): AudioBufferSourceNode {
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

interface NoteQueueProps {
  note: number
  time: number
}

interface schedulerParams {
  ctx: AudioContext
  noteBeatNumber: number
  time: number
  sweepGrid: Map<number, Object>
  pulseGrid: Map<number, Object>
  noiseGrid: Map<number, Object>
  sampleGrid: Map<number, Object>
  notesInQueue: Array<NoteQueueProps>
  currentNote: number
  nextNoteTime: number
  scheduleAheadTime: number
  lookAhead: number
  timerId: number
  audioBuffer?: AudioBuffer
}

function scheduler(params: schedulerParams) {
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

function scheduleNote(params: schedulerParams) {
  params.notesInQueue.push({ note: params.noteBeatNumber, time: params.time })

  const sweepNoteParams = {
    ...params.sweepGrid.get(params.noteBeatNumber),
    wave: wave,
    sweepLength: DEFAULT_SWEEP_LENGTH,
  }
  if (typeof sweepNoteParams !== 'undefined')
    playSweep(sweepNoteParams as playSweepParams)

  const pulseNoteParams = params.pulseGrid.get(params.noteBeatNumber)
  if (typeof pulseNoteParams !== 'undefined')
    playPulse(pulseNoteParams as playPulseParams)

  const noiseNoteParams = params.noiseGrid.get(params.noteBeatNumber)
  if (typeof noiseNoteParams !== 'undefined')
    playNoise(noiseNoteParams as playNoiseParams)

  const sampleNoteParams = params.sampleGrid.get(params.noteBeatNumber)
  if (typeof sampleNoteParams !== 'undefined')
    playSample(sampleNoteParams as playSampleParams)
}

// END: SCHEDULING

export default function StepSequencer() {
  const [isPlaying, setIsPlaying] = useState(false)
  // voice settings
  const [bpm, setBpm] = useState(DEFAULT_BPM)
  const [attack, setAttack] = useState(DEFAULT_ATTACK)
  const [release, setRelease] = useState(DEFAULT_RELEASE)
  const [pulseHz, setPulseHz] = useState(DEFAULT_PULSE_HZ)
  const [lfo, setLfo] = useState(DEFAULT_LFO)
  const [noiseDuration, setNoiseDuration] = useState(DEFAULT_NOISE_DURATION)
  const [bandHz, setBandHz] = useState(DEFAULT_BAND_HZ)
  const [samplePlaybackRate, setSamplePlaybackRate] = useState(
    DEFAULT_SAMPLE_PLAYBACK_RATE,
  )

  const audioContextRef = useRef<AudioContext | null>(audioContext)
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

    const audioCtx = audioContextRef?.current
    if (audioCtx === null) return

    let drawNote = lastNoteDrawn
    const currentTime = audioCtx.currentTime

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
    if (audioContextRef.current === null) return

    async function setupSample(ctx: AudioContext, filePath: string) {
      dtmf = await getFile(ctx, filePath)
    }
    setupSample(audioContextRef.current, file)
  }, [])

  useEffect(() => {
    const audioCtx = audioContextRef.current
    if (!audioCtx) return

    if (isPlaying) {
      if (audioCtx.state === 'suspended') audioCtx.resume()

      currentNote = 0
      nextNoteTime = audioCtx.currentTime
      scheduler({
        ctx: audioCtx,
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
      <div id='loading'>
        <p>Loading...</p>
      </div>

      <div className='sequencer'>
        <section className='controls-main'>
          <h1>modemDN</h1>
          <label htmlFor='bpm'>BPM</label>
          <input
            type='range'
            min={MIN_BPM}
            max={MAX_BPM}
            defaultValue={bpm}
            step={DEFAULT_BPM_STEP}
            onChange={onBpmChange}
          />
          <span id='bpmval'>{bpm}</span>
          <button data-playing='false' onClick={onPlayButtonClick}>
            Play
          </button>
        </section>
      </div>

      <div className='track-one'>
        <h2>Sweep</h2>
        <section className='controls'>
          <label htmlFor='attack'>Att</label>
          <input
            type='range'
            name='attack'
            id='attack'
            min={MIN_ADSR_RANGE}
            max={MAX_ADSR_RANGE}
            defaultValue={attack}
            step={DEFAULT_ADSR_STEP}
            onChange={onAttackChange}
          />
          <label htmlFor='release'>Rel</label>
          <input
            type='range'
            name='release'
            id='release'
            min={MIN_ADSR_RANGE}
            max={MAX_ADSR_RANGE}
            defaultValue={release}
            step={DEFAULT_ADSR_STEP}
            onChange={onReleaseChange}
          />
        </section>

        <section ref={sweepPadsRef} className='pads'>
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

        <section className='track-two'>
          <h2>Pulse</h2>
          <section className='controls'>
            <label htmlFor='pulseHz'>Hz</label>
            <input
              name='hz'
              id='hz'
              type='range'
              min={MIN_PULSE_HZ}
              max={MAX_PULSE_HZ}
              defaultValue={pulseHz}
              step={DEFAULT_PULSE_HZ_STEP}
              onChange={onPulseHzChange}
            />
            <label htmlFor='lfo'>LFO</label>
            <input
              name='lfo'
              id='lfo'
              type='range'
              min={MIN_LFO}
              max={MAX_LFO}
              defaultValue={lfo}
              step={DEFAULT_LFO_STEP}
              onChange={onLfoChange}
            />
          </section>

          <section ref={pulsePadsRef} className='pads'>
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

        <section className='track-three'>
          <h2>Noise</h2>
          <section className='controls'>
            <label htmlFor='duration'>Dur</label>
            <input
              name='duration'
              id='duration'
              type='range'
              min={MIN_NOISE_DURATION}
              max={MAX_NOISE_DURATION}
              defaultValue={noiseDuration}
              step={DEFAULT_NOISE_DURATION_STEP}
              onChange={onNoiseDurationChange}
            />
            <label htmlFor='band'>Band</label>
            <input
              name='band'
              id='band'
              type='range'
              min={MIN_BAND}
              max={MAX_BAND}
              defaultValue={bandHz}
              step={DEFAULT_BAND_HZ_STEP}
              onChange={onBandHzChange}
            />
          </section>

          <section ref={noisePadsRef} className='pads'>
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

        <section className='track-four'>
          <h2>DTMF</h2>
          <section className='controls'>
            <label htmlFor='rate'>Rate</label>
            <input
              name='rate'
              id='rate'
              type='range'
              min={MIN_RATE}
              max={MAX_RATE}
              defaultValue={samplePlaybackRate}
              step={DEFAULT_SAMPLE_PLAYBACK_RATE_STEP}
              onChange={onSamplePlaybackRateChange}
            />
          </section>

          <section ref={samplePadsRef} className='pads'>
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
    </>
  )
}
