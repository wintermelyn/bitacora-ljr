'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import img1 from '@/images/galeria-1.webp'
import img2 from '@/images/galeria-2.webp'
import img3 from '@/images/galeria-3.webp'

const slides = [
  {
    src: img1,
    alt: 'Grupo de estudiantes compartiendo en una mesa al aire libre',
  },
  {
    src: img2,
    alt: 'Actividad recreativa del curso',
  },
  {
    src: img3,
    alt: 'Momento de juegos y convivencia',
  },
]

export function GallerySection() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }, [])

  const pauseForInteraction = useCallback(() => {
    setIsPaused(true)
    clearAutoplay()
    clearResumeTimeout()
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 5000)
  }, [clearAutoplay, clearResumeTimeout])

  useEffect(() => {
    if (!api || isPaused) return

    clearAutoplay()
    autoplayRef.current = setInterval(() => {
      api.scrollNext()
    }, 3500)

    return () => clearAutoplay()
  }, [api, isPaused, clearAutoplay])

  useEffect(() => {
    if (!api) return

    api.on('pointerDown', pauseForInteraction)

    return () => {
      api.off('pointerDown', pauseForInteraction)
    }
  }, [api, pauseForInteraction])

  useEffect(() => {
    return () => {
      clearAutoplay()
      clearResumeTimeout()
    }
  }, [clearAutoplay, clearResumeTimeout])

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-24">
      <div className="max-w-4xl mx-auto">
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: 'center',
          }}
          onPointerDownCapture={pauseForInteraction}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="h-80 sm:h-96 rounded-2xl overflow-hidden relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    // max-w-4xl ≈ 896px, así que pedimos algo cercano a eso
                    sizes="(min-width: 1024px) 896px, (min-width: 768px) 768px, 100vw"
                    quality={90}
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="shadow-md" />
          <CarouselNext className="shadow-md" />
        </Carousel>
      </div>
    </section>
  )
}
