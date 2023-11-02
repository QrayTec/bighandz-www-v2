declare module 'wow.js' {
  interface WowOptions {
    boxClass?: string
    animateClass?: string
    offset?: number
    mobile?: boolean
    live?: boolean
    loop?: boolean
  }

  class WOW {
    constructor(options?: WowOptions)

    init(): void

    stop(): void
  }

  export default WOW
}
