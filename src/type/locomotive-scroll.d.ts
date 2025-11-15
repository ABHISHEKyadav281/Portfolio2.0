declare module 'locomotive-scroll' {
    export default class LocomotiveScroll {
      constructor(options?: {
        el: HTMLElement | null
        name?: string
        offset?: number[]
        repeat?: boolean
        smooth?: boolean
        smoothMobile?: boolean
        direction?: 'vertical' | 'horizontal'
        gestureDirection?: 'vertical' | 'horizontal'
        reloadOnContextChange?: boolean
        lerp?: number
        tablet?: { smooth?: boolean }
        smartphone?: { smooth?: boolean }
        getDirection?: boolean
        getSpeed?: boolean
        multiplier?: number
        class?: string
        scrollFromAnywhere?: boolean
        resetNativeScroll?: boolean
      })
  
      destroy(): void
      update(): void
      scrollTo(
        target: HTMLElement | string | number,
        options?: {
          offset?: number
          duration?: number
          easing?: (t: number) => number
        }
      ): void
      start(): void
      stop(): void
      on(event: string, callback: Function): void
      off(event: string, callback: Function): void
    }
  }
  