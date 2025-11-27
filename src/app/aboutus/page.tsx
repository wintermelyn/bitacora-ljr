"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/ui/navbar"

interface TeamMember {
  id: number
  name: string
  imageUrl: string
  description: string
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "María González", imageUrl: "/professional-woman-ceo.png", description: "María es la fundadora y CEO de nuestra empresa. Con más de 15 años de experiencia en liderazgo empresarial, ha guiado a la compañía hacia nuevos horizontes de innovación y crecimiento." },
  { id: 2, name: "Carlos Rodríguez", imageUrl: "/professional-tech-director.png", description: "Carlos lidera nuestro equipo de tecnología con una experiencia excepcional en desarrollo de software y arquitectura de sistemas." },
  { id: 3, name: "Ana Martínez", imageUrl: "/professional-woman-design-director.jpg", description: "Ana es nuestra directora creativa con un ojo excepcional para el diseño y la experiencia del usuario." },
  { id: 4, name: "Diego López", imageUrl: "/professional-marketing-director.png", description: "Diego dirige nuestras estrategias de marketing con un enfoque data-driven y creativo." },
  { id: 5, name: "Laura Fernández", imageUrl: "/professional-woman-operations-director.png", description: "Laura es la columna vertebral de nuestras operaciones diarias, asegurando que todos nuestros proyectos se ejecuten sin problemas." },
]

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const descriptionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (selectedMember && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedMember])

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const scrollAmount = 240 // ancho tarjeta más pequeña + gap
    carouselRef.current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div aria-hidden="true" className="pt-16 md:pt-20" />

      {/* Título */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Nuestro Equipo</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Conoce a las personas que hacen posible nuestra visión</p>
      </section>

      {/* Carrusel */}
      <section className="py-8 px-4 flex justify-center">
        <div className="relative w-full max-w-5xl">
          {/* Flecha izquierda */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
            onClick={() => scrollCarousel("left")}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
            onClick={() => scrollCarousel("right")}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Grid centrado */}
        {/* Grid centrado sin scroll vertical */}
        <div
        ref={carouselRef}
        className="flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200 px-2"
        >
        {teamMembers.map((member) => (
            <div key={member.id} className="flex-shrink-0 w-48 snap-center">
            <Card
                className={`group cursor-pointer overflow-hidden border-0 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                selectedMember?.id === member.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedMember(member)}
            >
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                </div>
                <div className="p-3 text-center">
                <h3 className="text-base font-semibold text-gray-800">{member.name}</h3>
                </div>
            </Card>
            </div>
        ))}
        </div>

        </div>
      </section>

      {/* Panel de descripción */}
      {selectedMember && (
        <section ref={descriptionRef} className="py-8 px-4 flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-6 md:p-8 border-0 shadow-lg bg-white rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-blue-300 flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={selectedMember.imageUrl || "/placeholder.svg"}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{selectedMember.name}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{selectedMember.description}</p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Reflexión Final */}
      <section className="py-12 px-4 flex justify-center">
        <div className="w-full max-w-5xl">
          <Card className="p-8 md:p-10 border-0 shadow-lg bg-white rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Reflexión Final</h3>
            <p className="text-gray-700 text-base mb-4">
              Durante este semestre, hemos podido experimentar y aplicar diversos juegos y dinámicas que fomentan el liderazgo, la colaboración y la resolución de problemas. Cada actividad nos permitió identificar fortalezas y áreas de mejora en nuestro desarrollo personal y grupal.
            </p>
            <p className="text-gray-700 text-base">
              La integración de la teoría con la práctica nos permitió comprender la importancia de la planificación, la ejecución y la reflexión posterior. Este curso no solo nos proporcionó conocimientos sobre recreación y liderazgo, sino también habilidades transferibles para futuras experiencias académicas y profesionales.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
