'use client'

import { PlayCircle } from 'lucide-react'
import { ParallaxOnScroll } from '@/components/scroll-animations'

export function GallerySection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-24">
      <div className="max-w-5xl mx-auto">
        <ParallaxOnScroll speed={0.3}>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-teal-600/20 h-96 border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Galería de momentos del semestre</p>
              </div>
            </div>
          </div>
        </ParallaxOnScroll>
      </div>
    </section>
  )
}
