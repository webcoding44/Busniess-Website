import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePageMotion<T extends HTMLElement>() {
  const rootRef = useRef<T>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    }, root)

    return () => context.revert()
  }, [])

  return rootRef
}
