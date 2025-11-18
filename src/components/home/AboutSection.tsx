'use client'

import { BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SlideInOnScroll } from '@/components/scroll-animations'

export function AboutSection() {
  return (
    <section id="acerca" className="px-4 sm:px-6 lg:px-8 mb-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideInOnScroll direction="left">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Qué es GameLog?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Una plataforma diseñada para documentar, analizar y celebrar todos los juegos y actividades recreativas
                que forman parte del curso de Liderazgo y Recreación.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Desde la planificación hasta los resultados, capturamos cada momento de aprendizaje y diversión.
              </p>
              <Button size="lg" variant="outline">
                Ver documentación completa
              </Button>
            </div>
          </SlideInOnScroll>

          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-600/20 to-primary/20 h-80 border border-primary/20 flex items-center justify-center">
            <BookOpen className="w-32 h-32 text-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
