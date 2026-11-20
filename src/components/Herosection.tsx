





import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { heroFrames } from '../data/heroFrames'
import { ArrowIcon } from './ArrowIcon'

gsap.registerPlugin(ScrollTrigger)

type LoadProgress = {
  settled: number
  total: number
  failures: number
}

const initialProgress: LoadProgress = { settled: 0, total: heroFrames.length, failures: 0 }

function Herosection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(initialProgress)
  const [hasFrame, setHasFrame] = useState(false)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!section || !canvas || !context) return

    let disposed = false
    let rafId = 0
    let loadedCount = 0
    let settledCount = 0
    let failureCount = 0
    let nextFrameToLoad = 1
    let activeLoads = 0
    let startedRemainingFrames = false
    const concurrency = 4
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frameTotal = reducedMotion ? 1 : heroFrames.length
    const loaded = new Array<boolean>(heroFrames.length).fill(false)
    const images = heroFrames.map(() => new Image())
    const playhead = { frame: 0 }

    setProgress({ settled: 0, total: frameTotal, failures: 0 })

    const reportProgress = () => {
      if (disposed) return
      setProgress({ settled: settledCount, total: frameTotal, failures: failureCount })
    }

    const nearestLoadedIndex = (requestedIndex: number) => {
      const center = Math.max(0, Math.min(heroFrames.length - 1, Math.round(requestedIndex)))
      if (loaded[center]) return center

      for (let distance = 1; distance < heroFrames.length; distance += 1) {
        const before = center - distance
        const after = center + distance
        if (before >= 0 && loaded[before]) return before
        if (after < heroFrames.length && loaded[after]) return after
      }

      return -1
    }

    const drawFrame = () => {
      if (disposed || rafId) return

      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        const index = nearestLoadedIndex(playhead.frame)
        if (index < 0 || !canvas.width || !canvas.height) return

        const image = images[index]
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        if (!width || !height) return

        const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
        const drawnWidth = image.naturalWidth * scale
        const drawnHeight = image.naturalHeight * scale
        const offsetX = (width - drawnWidth) / 2
        const offsetY = (height - drawnHeight) / 2

        context.clearRect(0, 0, width, height)
        context.drawImage(image, offsetX, offsetY, drawnWidth, drawnHeight)
      })
    }

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const pixelWidth = Math.max(1, Math.round(bounds.width * pixelRatio))
      const pixelHeight = Math.max(1, Math.round(bounds.height * pixelRatio))

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth
        canvas.height = pixelHeight
      }

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      drawFrame()
    }

    const finishFrameLoad = (index: number, succeeded: boolean) => {
      if (disposed) return
      settledCount += 1
      if (succeeded) {
        loaded[index] = true
        loadedCount += 1
        if (loadedCount === 1) setHasFrame(true)
      } else {
        failureCount += 1
      }

      reportProgress()
      drawFrame()
      pumpRemainingFrames()
    }

    const pumpRemainingFrames = () => {
      if (disposed || reducedMotion || !startedRemainingFrames) return

      while (activeLoads < concurrency && nextFrameToLoad < heroFrames.length) {
        const index = nextFrameToLoad
        nextFrameToLoad += 1
        activeLoads += 1

        const image = images[index]
        image.decoding = 'async'
        image.onload = () => {
          activeLoads -= 1
          finishFrameLoad(index, true)
        }
        image.onerror = () => {
          activeLoads -= 1
          finishFrameLoad(index, false)
        }
        image.src = heroFrames[index]
      }
    }

    const startRemainingFrames = () => {
      if (startedRemainingFrames || reducedMotion || disposed) return
      startedRemainingFrames = true
      pumpRemainingFrames()
    }

    const firstImage = images[0]
    firstImage.decoding = 'async'
    firstImage.fetchPriority = 'high'
    firstImage.onload = () => {
      finishFrameLoad(0, true)
      startRemainingFrames()
    }
    firstImage.onerror = () => {
      finishFrameLoad(0, false)
      startRemainingFrames()
    }
    firstImage.src = heroFrames[0]

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(section)
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const animationContext = gsap.context(() => {
      if (!reducedMotion && heroFrames.length > 1) {
        gsap.to(playhead, {
          frame: heroFrames.length - 1,
          ease: 'none',
          onUpdate: drawFrame,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * 1.7)}`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: drawFrame,
          },
        })
      }
    }, section)

    return () => {
      disposed = true
      if (rafId) window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      animationContext.revert()
      images.forEach((image) => {
        image.onload = null
        image.onerror = null
        image.src = ''
      })
    }
  }, [])

  const complete = progress.settled >= progress.total
  const percentage = progress.total > 0 ? Math.round((progress.settled / progress.total) * 100) : 0
  const localizedPercentage = new Intl.NumberFormat('en-US').format(percentage)

  return (
    <section className="hero-sequence" ref={sectionRef} aria-label="Vista Developments introduction">
      <canvas
        aria-hidden="true"
        className={`hero-sequence__canvas${hasFrame ? ' is-ready' : ''}`}
        ref={canvasRef}
      />
      <div className="hero-sequence__wash" aria-hidden="true" />
      {!hasFrame && <div className="hero-sequence__fallback" aria-hidden="true" />}

      <div className="hero-sequence__content page-shell">
        <div className="hero-copy" data-hero-copy>
          <p className="eyebrow eyebrow--light"><span /> Thoughtfully planned homes</p>
          <h1>Modern living<br /><em>starts here.</em></h1>
          <p className="hero-copy__summary">
            Discover homes and communities shaped by thoughtful architecture, enduring materials, and a stronger sense of place.
          </p>
          <div className="hero-copy__actions">
            <Link className="button button--light" to="/projects">Explore properties <ArrowIcon /></Link>
            <Link className="hero-text-link" to="/contact">Request information <ArrowIcon diagonal /></Link>
          </div>
        </div>

        <div className="hero-sequence__foot" aria-hidden="true">
          <span>01 / A more considered place to live</span>
          <span className="hero-sequence__scroll">Scroll to explore <i /></span>
        </div>
      </div>

      {!complete && (
        <div className="sequence-loader" role="status" aria-live="polite">
          <div className="sequence-loader__topline">
            <span>{hasFrame ? 'Preparing the sequence' : 'Preparing the view'}</span>
            <span>{localizedPercentage}%</span>
          </div>
          <div className="sequence-loader__track">
            <span style={{ width: `${percentage}%` }} />
          </div>
        </div>
      )}

      {complete && progress.failures > 0 && (
        <span className="sr-only" role="status">
          {hasFrame
            ? 'Some image frames could not be loaded. The nearest available frames are shown.'
            : 'The image frames could not be loaded. A static background is shown instead.'}
        </span>
      )}
    </section>
  )
}

export default Herosection
