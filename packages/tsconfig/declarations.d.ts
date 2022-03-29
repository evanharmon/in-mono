// export to browser
export {}

declare global {
  interface window {
    WebkitAudioContext: typeof AudioContext
    MozAudioContext: typeof AudioContext
  }
}
