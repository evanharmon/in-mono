// Thoughts
// I really did not like using this class. It seems unnecessary when a global
// can achieve similar results.
// created confusion as AudioEngine.audioContext.connect
// and AudioEngine.connect auto completed
export default class AudioEngine extends AudioContext {
  // Don't overuse audioContexts. Browser has limited number
  public audioContext: AudioContext | undefined

  constructor() {
    super()
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)()
    }
  }
}

// general functions outside the scope of classes
export async function getRawBufferFromUrl(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url)
  if (!res.ok) throw Error('failed to load sound')

  return res.arrayBuffer()
}

// AudioBufferSourceNodes are throw away so do not track state of playing
// start / stop are single use
export class Clip extends AudioBufferSourceNode {
  public node: AudioBufferSourceNode | undefined

  // current implementation relies on garbage collection (GC)
  // of node. AudioBuffer reference is re-used though
  constructor(audioContext: AudioContext, audioBuffer: AudioBuffer) {
    super(audioContext)
    this.node = audioContext.createBufferSource()
    this.node.buffer = audioBuffer
    this.node.onended = () => this.node?.disconnect()
  }

  play(n = 0) {
    if (typeof this.node === 'undefined') return

    try {
      this.node.start(n)
    } catch (error) {
      console.log('play already called on this node')
    }
  }

  // value of 0 stops sound immediately
  stop(n = 0) {
    try {
      this.node?.stop(n)
    } catch (error) {
      console.log('play already called on this node')
    }
  }
}
