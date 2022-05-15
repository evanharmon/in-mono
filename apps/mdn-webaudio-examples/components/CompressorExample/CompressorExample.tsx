import { useEffect, useRef, useState } from 'react'
import { AudioContext } from '@evanharmon/utils'

let audioContext: AudioContext | null = null
if (audioContext !== null && AudioContext !== null) {
  audioContext = new AudioContext()
}

export default function CompressorExample() {
  const [isActive, setIsActive] = useState(false)
  const audioRef = useRef<HTMLMediaElement | null>(null)

  useEffect(() => {
    function onPlay() {
      console.log(`play called`, audioRef)
      // TODO get this working
      if (!audioContext || !audioRef.current) return

      const source = audioContext?.createMediaElementSource(audioRef.current)

      const compressor = audioContext?.createDynamicsCompressor()
      if (!compressor) return

      compressor.threshold.value = -50
      compressor.knee.value = 40
      compressor.ratio.value = 12
      compressor.attack.value = 0
      compressor.release.value = 0.25

      source.connect(audioContext?.destination)
    }

    if (audioRef && audioRef.current) {
      audioRef.current.addEventListener('play', onPlay)
    }

    return () => {
      if (audioRef && audioRef.current) {
        audioRef.current.removeEventListener('play', onPlay)
      }
    }
  }, [])

  const onAddCompressionClickHandler = async () => {
  }

  return <>
    <h1>Compressor example</h1>
    <audio ref={audioRef} controls src="viper.mp3" />
    <button data-active={isActive} onClick={onAddCompressionClickHandler}>
      {isActive ? 'Remove compression' : 'Add compression'}
    </button>
  </>
}