import { useLayoutEffect, useEffect, useRef, useState } from "react"

declare global {
    let audioContext: AudioContext
    let requestAnimFrame: typeof requestAnimationFrame
}

let sampleSize = 1024
let ctx: any

// AudioBufferSourceNode are one time use only!!!
// not using this setup function
// function setupAudioNodes(ctx: AudioContext) {
//     sourceNode = ctx.createBufferSource()
//     sourceNode.connect(ctx.destination)
// }

// create audioContext with long living summingNode
// decouples analyserNode from sourceNode which is single use
let audioContext: AudioContext
let summingGainNode: GainNode
let analyserNode: AnalyserNode
let amplitudeArray: Uint8Array
if (typeof window !== "undefined") {
    try {
        audioContext = new (window.webkitAudioContext || window.AudioContext || window.mozAudioContext)()

        summingGainNode = audioContext.createGain()
        summingGainNode.gain.value = 1.0

        analyserNode = audioContext.createAnalyser()
        analyserNode.fftSize = sampleSize
        amplitudeArray = new Uint8Array(analyserNode.frequencyBinCount)

        summingGainNode.connect(audioContext.destination)
        summingGainNode.connect(analyserNode)
        // setupAudioNode functionality included in playSound()
        // setupAudioNodes(audioContext)
    } catch (error) {
        console.error('Web Audio API is not supported in this browser', error);
    }
}

let requestAnimFrame: typeof requestAnimationFrame
if (typeof window !== "undefined") {
    requestAnimFrame = (function() {
        return  window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback: () => void, element: any) {window.setTimeout(callback, 1000 / 60)
            }
    })()
}

let audioBuffer: AudioBuffer
async function loadSound(ctx: AudioContext, url: string) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    // update global audioBuffer
    audioBuffer = await ctx.decodeAudioData(arrayBuffer)
    return audioBuffer
}

// TODO this is a problem bc analyserNode won't be created yet
// create new AudioBufferSourceNode every time
let sourceNode: AudioBufferSourceNode
function playSound() {
    sourceNode = audioContext.createBufferSource()
    sourceNode.connect(summingGainNode)
    sourceNode.buffer = audioBuffer
    sourceNode.onended = () => sourceNode.disconnect()
    
    sourceNode.start(0)
}

function stopSound() {
    try {
        sourceNode.stop(0)
    } catch (e) {
        // cannot check if sourceNode is playing and calling stop if not playing will error
    }
}

let canvasWidth = 512
let canvasHeight = 256
let audioUrl = "viper.mp3"
export default function AudioAnalyzer() {
    const [audioPlaying, setAudioPlaying] = useState<boolean | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const requestIdRef = useRef<number>()

    const renderFrame = () => {
        if (!canvasRef.current) return

        analyserNode.getByteTimeDomainData(amplitudeArray)
        ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        for (let i = 0; i < amplitudeArray.length; i++) {
            // if (i === 0) console.log(amplitudeArray[i])
            let value = amplitudeArray[i] / 256;
            let y = canvasHeight - (canvasHeight * value) - 1
        ctx.fillStyle = '#000000'
        ctx.fillRect(i,y,1,1)
        }
    }

    useLayoutEffect(() => {
        const animate = () => {
            if (!canvasRef.current) return

            renderFrame()
            requestIdRef.current = requestAnimFrame(animate)
        }

        requestIdRef.current = requestAnimFrame(animate)
        return () => {
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current)
            }
        }
    }, [])

    useEffect(() => {
        // remixjs / nextjs also render server side from same file.
        // do not attempt to access `window` object server side
        if (typeof window == "undefined") return
        loadSound(audioContext, audioUrl)
    }, [])

    useEffect(() => {
        if (audioPlaying === true)
            playSound()

        if (audioPlaying === false)
            stopSound()
    }, [audioPlaying])

    return (
            <main>
                <h1>Audio Analyzer</h1>
                <canvas ref={canvasRef} id="canvas" width="512" height="256"></canvas>
                <p id="controls">
                    <button id="start_button" onClick={() => setAudioPlaying(true)}>Start</button>
                    &nbsp; &nbsp;
                    <button id="stop_button" onClick={() => setAudioPlaying(false)}>Stop</button>
                </p>
                <p id="msg"></p>
            </main>
    )
}