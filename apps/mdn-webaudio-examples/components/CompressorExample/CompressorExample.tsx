import { useState } from 'react'
import { AudioContext } from '@evanharmon/utils'

let audioContext: AudioContext | null = null
if (audioContext !== null && AudioContext !== null) {
  audioContext = new AudioContext()
}

async function resumeAudio() {
  if (audioContext?.state === 'suspended') {
    await audioContext.resume()
  }

  return
}

export default function CompressorExample() {
  const [isActive, setIsActive] = useState(false)

  const onAddCompressionClickHandler = async () => {
    await resumeAudio()
  }

  return <>
    <h1>Compressor example</h1>
    <audio controls>
      <source src="viper.ogg" type="audio/ogg" />
      <source src="viper.mp3" type="audio/mp3" />
    </audio>
    <button data-active={isActive} onClick={onAddCompressionClickHandler}>Add compression</button>
  </>
}