'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeInOnScroll } from '@/components/scroll-animations'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInOnScroll delay={0}>
            <p className="text-sm text-muted-foreground mb-4">
                Liderazgo, Juegos y Recreación · Semestre 2025
            </p>
        </FadeInOnScroll>


        <FadeInOnScroll delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Bitácora de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">
              {' '}
              Juegos
            </span>
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Documentamos cada actividad, cada reto y cada momento de aprendizaje a través del juego. Una experiencia
            de liderazgo en movimiento.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/games">
                Explorar Bitácora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="/about">Más Información</Link>
            </Button>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-3 gap-4 mt-16 pt-12 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-primary">100+</div>
            <p className="text-sm text-muted-foreground">Juegos Registrados</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">16</div>
            <p className="text-sm text-muted-foreground">Semanas de Acción</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground">Participación</p>
          </div>
        </div>
      </div>
    </section>
  )
}
