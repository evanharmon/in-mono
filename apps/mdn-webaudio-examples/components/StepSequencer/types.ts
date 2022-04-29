// NOTE: yes all the pad types could be made more generic
// I am being explicit here as it's a learning exercise
export interface playSweepParams {
  attackTime: number
  releaseTime: number
  wave: any
  sweepLength: number
}

export interface playPulseParams {
  pulseHz: number
  pulseTime: number
  lfoHz: number
}

export interface playNoiseParams {
  noiseDuration: number
  bandHz: number
}

export interface playSampleParams {
  audioBuffer: AudioBuffer
  playbackRate: number
}

export interface NoteQueueProps {
  note: number
  time: number
}

export interface schedulerParams {
  sweepGrid: Map<number, Object>
  pulseGrid: Map<number, Object>
  noiseGrid: Map<number, Object>
  sampleGrid: Map<number, Object>
  audioBuffer?: AudioBuffer
}
