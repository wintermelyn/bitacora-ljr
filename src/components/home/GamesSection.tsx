'use client'

import { FadeInOnScroll } from '@/components/scroll-animations'
import { games } from '@/lib/gamelog-data'

export function GamesSection() {
  return (
    <section id="juegos" className="px-4 sm:px-6 lg:px-8 mb-24">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tipos de Juegos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Variedad de actividades diseñadas para fortalecer el liderazgo y la recreación
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, idx) => {
            const Icon = game.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-muted-foreground">{game.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
