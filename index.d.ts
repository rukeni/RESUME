declare module 'audit-config' {
  global {
    interface Window {
      webkitAudioContext: typeof AudioContext
    }
    interface AudioContext {
      state: AudioContextState
  }
}
}

