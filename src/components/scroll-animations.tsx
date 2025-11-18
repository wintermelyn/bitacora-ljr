'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade in on scroll
export function FadeInOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay,
      }
    )
  }, [delay])

  return <div ref={ref}>{children}</div>
}

// Stagger children on scroll
export function StaggerOnScroll({
  children,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const items = ref.current.querySelectorAll('[data-stagger]')
    
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [staggerDelay])

  return <div ref={ref}>{children}</div>
}

// Parallax effect
export function ParallaxOnScroll({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode
  speed?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: (index, target) => {
        const distance = window.innerHeight - target.offsetTop
        return distance * -speed
      },
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    })
  }, [speed])

  return <div ref={ref}>{children}</div>
}

// Scale in on scroll
export function ScaleInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return <div ref={ref}>{children}</div>
}

// Slide in from sides
export function SlideInOnScroll({
  children,
  direction = 'left',
}: {
  children: React.ReactNode
  direction?: 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const initialX = direction === 'left' ? -50 : 50

    gsap.fromTo(
      ref.current,
      { opacity: 0, x: initialX },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [direction])

  return <div ref={ref}>{children}</div>
}
