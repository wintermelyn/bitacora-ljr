'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScaleInOnScroll } from '@/components/scroll-animations'

export function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-12">
      <ScaleInOnScroll>
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-teal-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            ¿Listo para explorar?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Accede a la bitácora completa y descubre todos los juegos, estadísticas y momentos memorables del semestre.
          </p>
          <Button size="lg" variant="secondary">
            Acceder Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </ScaleInOnScroll>
    </section>
  )
}
