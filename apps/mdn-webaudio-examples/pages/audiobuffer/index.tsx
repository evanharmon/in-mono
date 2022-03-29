import React, { useState } from 'react'

declare global {
  interface Window {
    audioCtx: AudioContext
  }
}

// global initializations
function initAudioContext() {
  if (typeof window !== 'undefined') {
    window.audioCtx = new (window.webkitAudioContext || window.AudioContext)()
  }
}
initAudioContext()

export default function AudioBuffer() {
  const [channels, setChannels] = useState(2)

  // very simple button - single shot with unlimited voices
  const onClickHandler = () => {
    if (typeof window.audioCtx === 'undefined') return

    let audioCtx = window?.audioCtx
    // 2 seconds of frames
    let framerate = audioCtx.sampleRate * 2

    let arrayBuffer = audioCtx.createBuffer(
      channels,
      framerate,
      audioCtx.sampleRate,
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
    const source = audioCtx.createBufferSource()
    source.buffer = arrayBuffer
    source.connect(audioCtx.destination)
    source.start()
    source.onended = () => console.log('white noise finished')
  }

  return (
    <>
      <h1>AudioBuffer example</h1>
      <button onClick={onClickHandler}>Generate white noise</button>
    </>
  )
}
