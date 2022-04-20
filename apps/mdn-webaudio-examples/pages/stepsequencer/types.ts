// NOTE: yes all the pad types could be made more generic
// I am being explicit here as it's a learning exercise
export interface playSweepParams {
  ctx: AudioContext
  attackTime: number
  releaseTime: number
  wave: any
  time: number
  sweepLength: number
}

export interface playPulseParams {
  ctx: AudioContext
  pulseHz: number
  pulseTime: number
  lfoHz: number
  time: number
}

export interface playNoiseParams {
  ctx: AudioContext
  time: number
  noiseDuration: number
  bandHz: number
}

export interface playSampleParams {
  ctx: AudioContext
  audioBuffer: AudioBuffer
  time: number
  playbackRate: number
}

export interface NoteQueueProps {
  note: number
  time: number
}

export interface schedulerParams {
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
