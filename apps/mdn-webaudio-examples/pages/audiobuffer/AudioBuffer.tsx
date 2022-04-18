const DEFAULT_NUM_CHANNELS = 2
const DEFAULT_FRAME_LENGTH_SECONDS = 2

let AudioContext =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : null
// global initializations
let audioContext: AudioContext | null = null
function initAudioContext() {
  if (AudioContext) {
    audioContext = new AudioContext()
  }
}
initAudioContext()

export default function AudioBuffer({
  channels = DEFAULT_NUM_CHANNELS,
  frameLengthSeconds = DEFAULT_FRAME_LENGTH_SECONDS,
}) {
  // very simple button - single shot with unlimited voices
  async function onClickHandler() {
    if (!audioContext || audioContext.state === 'closed') return

    if (audioContext.state === 'suspended') {
      await audioContext.resume()
    }

    // 2 seconds of frames
    let framerate = audioContext.sampleRate * frameLengthSeconds

    let arrayBuffer = audioContext.createBuffer(
      channels,
      framerate,
      audioContext.sampleRate,
    )

    // get array and fill with random values
    // audio data is NOT interleaved, fill one channel at a time
    for (let channel = 0; channel < channels; channel++) {
      // get data
      let buffer = arrayBuffer.getChannelData(channel)
      // iterate over buffer and fill
      for (let i = 0; i < buffer.length; i++) {
        // generate float random value
        buffer[i] = Math.random() * 2 - 1
      }
    }

    // AudioBufferSourceNode for single play
    const source = audioContext.createBufferSource()
    source.buffer = arrayBuffer
    source.connect(audioContext.destination)
    source.start()
    source.onended = () => console.log('white noise finished')
  }

  return (
    <>
      <style global jsx>{`
        body {
          font-family: 'Times';
        }
      `}</style>
      <h1>AudioBuffer example</h1>
      <button onClick={onClickHandler}>Make white noise</button>
    </>
  )
}
