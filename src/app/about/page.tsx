"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/home/Footer"
import { SlideInOnScroll } from "@/components/scroll-animations"
import { TeamGrid } from "@/components/about/team-grid"
import { Users, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <SlideInOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conoce Nuestro{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Equipo</span>
            </h1>
          </SlideInOnScroll>

          <SlideInOnScroll>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Un equipo diverso y apasionado por crear experiencias recreativas que transforman vidas. Cada miembro
              aporta su perspectiva única al curso de Liderazgo y Recreación.
            </p>
          </SlideInOnScroll>
        </div>
      </div>

      {/* Team Members Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <TeamGrid />
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Lo que Nos Define</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInOnScroll>
              <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-teal-600/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Trabajo en Equipo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creemos en la fuerza de la colaboración y cómo juntos podemos crear impacto real en nuestras
                  comunidades.
                </p>
              </div>
            </SlideInOnScroll>

            <SlideInOnScroll>
              <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-teal-600/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Pasión por la Recreación</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Entendemos que la recreación es más que diversión; es un catalizador para el crecimiento personal y
                  grupal.
                </p>
              </div>
            </SlideInOnScroll>

            <SlideInOnScroll>
              <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-teal-600/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovación</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Constantemente buscamos nuevas formas de enriquecer las experiencias y crear aprendizajes
                  significativos.
                </p>
              </div>
            </SlideInOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
