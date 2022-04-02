// export to browser
export {}

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
    mozAudioContext: typeof AudioContext
    webkitRequestAnimationFrame: typeof requestAnimationFrame
    mozRequestAnimationFrame: typeof requestAnimationFrame
  }
}
