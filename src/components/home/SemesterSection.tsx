'use client'

import { FadeInOnScroll, StaggerOnScroll } from '@/components/scroll-animations'
import { semesterHighlights } from '@/lib/gamelog-data'

export function SemesterSection() {
  return (
    <section id="semestre" className="px-4 sm:px-6 lg:px-8 mb-24 bg-accent/5 py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Progreso del Semestre</h2>
            <p className="text-lg text-muted-foreground">Evolución de actividades y aprendizajes</p>
          </div>
        </FadeInOnScroll>

        <StaggerOnScroll staggerDelay={0.10}>
          <div className="grid md:grid-cols-3 gap-6">
            {semesterHighlights.map((item, idx) => (
              <div
                key={idx}
                data-stagger
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition"
              >
                <div className="text-sm font-semibold text-primary mb-2">{item.week}</div>
                <h3 className="text-2xl font-bold mb-2">{item.games_count}</h3>
                <p className="text-muted-foreground">{item.focus}</p>
              </div>
            ))}
          </div>
        </StaggerOnScroll>
      </div>
    </section>
  )
}
