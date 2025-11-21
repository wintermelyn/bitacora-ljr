"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/ui/navbar"
import { GameCard } from "@/components/game-grid/game-card"
import { GameModal } from "@/components/game-grid/game-modal"
import { GameFilters } from "@/components/game-grid/game-filters"
import { FadeInOnScroll } from "@/components/scroll-animations"

const GAMES_DATA = [
  {
    id: 1,
    title: "Simon Dice",
    type: "warmup",
    description: "Juego de memoria y velocidad para calentar",
    materials: ["Ninguno"],
    intensity: "Baja",
    participants: "5-30",
    date: "2024-08-15",
    objectives: ["Activar la memoria visual", "Mejorar la concentración", "Crear energía grupal"],
    howToPlay:
      "Una persona es 'Simón' y da órdenes que comienzan con 'Simón dice...'. Los participantes deben seguir la orden solo si está precedida por esta frase. Si alguien hace la acción sin escuchar 'Simón dice', queda eliminado.",
    rules: [
      "Solo obedecer cuando diga 'Simón dice'",
      "No vale hacer acciones por anticipado",
      "El último jugador en pie es el ganador",
    ],
  },
  {
    id: 2,
    title: "Robo Bandera",
    type: "main",
    description: "Clásico juego de estrategia y trabajo en equipo",
    materials: ["Banderas", "Conos", "Silbato"],
    intensity: "Alta",
    participants: "10-50",
    date: "2024-08-20",
    objectives: ["Desarrollar estrategia de equipo", "Mejorar la velocidad y agilidad", "Fomentar liderazgo táctico"],
    howToPlay:
      "Se divide en dos equipos. Cada equipo tiene una bandera escondida en su territorio. El objetivo es capturar la bandera del equipo contrario sin ser tocado. Si eres tocado en el territorio enemigo, vas a la cárcel.",
    rules: [
      "No vale entrar al territorio enemigo por múltiples puntos",
      "Se puede rescatar compañeros de la cárcel",
      "Gana el equipo que capture la bandera primero",
    ],
  },
  {
    id: 3,
    title: "Círculo de Meditación",
    type: "cooldown",
    description: "Actividad de relajación y reflexión grupal",
    materials: ["Colchonetas"],
    intensity: "Muy Baja",
    participants: "5-30",
    date: "2024-08-22",
    objectives: ["Reducir energía del grupo", "Promover la reflexión", "Mejorar la concentración"],
    howToPlay:
      "El grupo se sienta en círculo. Se realiza una sesión guiada de meditación y respiración profunda. Se pueden incluir preguntas reflexivas sobre el día.",
    rules: [
      "Mantener silencio durante la meditación",
      "Respetar el ritmo de cada persona",
      "No hay competencia, es un espacio de calma",
    ],
  },
  {
    id: 4,
    title: "Pato Sentado",
    type: "warmup",
    description: "Juego rápido para activar el grupo",
    materials: ["Ninguno"],
    intensity: "Media",
    participants: "10-40",
    date: "2024-08-25",
    objectives: ["Activar cardiovascularmente", "Mejorar reflejos", "Crear risa y diversión"],
    howToPlay:
      "Todos en círculo, una persona es el 'pato' que está en el centro. El pato elige a alguien del círculo diciendo 'Pato' o 'Gato'. Si dice 'Pato', la persona debe hacer un sonido de pato. Si dice 'Gato', todos corren.",
    rules: [
      "El pato debe cambiar cada ronda",
      "No vale hacer trampa en los sonidos",
      "Todos deben participar activamente",
    ],
  },
  {
    id: 5,
    title: "Voleibol Adaptado",
    type: "main",
    description: "Variación inclusiva del voleibol tradicional",
    materials: ["Balón", "Red", "Cancha"],
    intensity: "Alta",
    participants: "12-30",
    date: "2024-09-01",
    objectives: ["Fomentar inclusión", "Mejorar coordinación", "Desarrollar trabajo en equipo"],
    howToPlay:
      "Se juega como voleibol tradicional pero con reglas adaptadas: la pelota puede rebotar en el suelo, todos los jugadores deben tocarla antes de pasar al otro lado.",
    rules: ["La pelota puede rebotar una vez", "Todos deben participar en cada jugada", "Máximo 5 toques por equipo"],
  },
  {
    id: 6,
    title: "Estiramiento Grupal",
    type: "cooldown",
    description: "Secuencia de estiramientos para recuperación",
    materials: ["Colchonetas"],
    intensity: "Muy Baja",
    participants: "Todo el grupo",
    date: "2024-09-05",
    objectives: ["Reducir tensión muscular", "Mejorar flexibilidad", "Promover relajación"],
    howToPlay:
      "Se realiza una rutina guiada de estiramientos estáticos. Se mantiene cada posición 20-30 segundos. Se enfatiza la respiración profunda.",
    rules: [
      "No hacer rebotes en los estiramientos",
      "No competir en flexibilidad",
      "Respirar profundamente en cada estiramiento",
    ],
  },
  {
    id: 7,
    title: "Carrera de Relevos",
    type: "warmup",
    description: "Competencia por equipos para activar",
    materials: ["Conos", "Cronómetro"],
    intensity: "Alta",
    participants: "10-40",
    date: "2024-09-08",
    objectives: ["Activar el grupo rápidamente", "Fomentar competencia sana", "Mejorar velocidad"],
    howToPlay:
      "Se dividen en equipos. Cada miembro debe correr hasta un cono y volver, pasando un testigo al siguiente. El primer equipo que complete todos los relevos gana.",
    rules: [
      "El testigo debe pasarse correctamente",
      "No vale tomar atajos",
      "Si alguien cae, continúa desde donde cayó",
    ],
  },
  {
    id: 8,
    title: "Búsqueda del Tesoro",
    type: "main",
    description: "Juego de búsqueda con acertijos y desafíos",
    materials: ["Mapas", "Objetos ocultos", "Premios"],
    intensity: "Media",
    participants: "15-50",
    date: "2024-09-12",
    objectives: ["Fomentar pensamiento estratégico", "Mejorar trabajo en equipo", "Promover resolución de problemas"],
    howToPlay:
      "Se esconden objetos o pistas alrededor del espacio. Los equipos deben seguir pistas y resolver acertijos para encontrar el tesoro final.",
    rules: [
      "Solo se pueden mirar las pistas designadas",
      "Trabajo en equipo obligatorio",
      "Gana el equipo que encuentre el tesoro primero",
    ],
  },
]

type GameType = "all" | "warmup" | "main" | "cooldown"
type IntensityFilter = "all" | "Muy Baja" | "Baja" | "Media" | "Alta"

export default function GamesPage() {
  const [selectedType, setSelectedType] = useState<GameType>("all")
  const [selectedIntensity, setSelectedIntensity] = useState<IntensityFilter>("all")
  const [selectedGame, setSelectedGame] = useState<(typeof GAMES_DATA)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const typeMatch = selectedType === "all" || game.type === selectedType
      const intensityMatch = selectedIntensity === "all" || game.intensity === selectedIntensity
      return typeMatch && intensityMatch
    })
  }, [selectedType, selectedIntensity])

  const handleOpenGame = (game: (typeof GAMES_DATA)[0]) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="max-w-7xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Bitácora de Juegos</h1>
            <p className="text-lg text-muted-foreground">Explora todos los juegos que jugamos en el semestre</p>
          </div>
        </FadeInOnScroll>

        <div className="max-w-7xl mx-auto mb-12">
          <GameFilters
            selectedType={selectedType}
            selectedIntensity={selectedIntensity}
            onTypeChange={setSelectedType}
            onIntensityChange={setSelectedIntensity}
          />
        </div>

        <div className="max-w-7xl mx-auto pb-20">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredGames.length} juego{filteredGames.length !== 1 ? "s" : ""} encontrado
              {filteredGames.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <FadeInOnScroll key={game.id} delay={index * 0.06}>
                <GameCard game={game} onOpen={handleOpenGame} />
              </FadeInOnScroll>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron juegos con esos criterios</p>
            </div>
          )}
        </div>
      </div>

      <GameModal game={selectedGame} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  )
}
