"use client"

import { useMemo, useState } from "react"
import { Navbar } from "@/components/ui/navbar"
import { GameCard } from "@/components/game-grid/game-card"
import { GameModal } from "@/components/game-grid/game-modal"
import { GameFilters } from "@/components/game-grid/game-filters"
import { FadeIn, FadeInOnScroll } from "@/components/scroll-animations"
import { GAMES_DATA } from "@/lib/games-data"
import { Game, GameTypeFilter, IntensityFilter } from "@/types/game"

export default function GamesPage() {
  const [selectedType, setSelectedType] = useState<GameTypeFilter>("all")
  const [selectedIntensity, setSelectedIntensity] = useState<IntensityFilter>("all")
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const typeMatch = selectedType === "all" || game.type === selectedType
      const intensityMatch = selectedIntensity === "all" || game.intensity === selectedIntensity
      return typeMatch && intensityMatch
    })
  }, [selectedType, selectedIntensity])

  const handleOpenGame = (game: Game) => {
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
              <FadeIn key={game.id} delay={index * 0.1}>
                <GameCard game={game} onOpen={handleOpenGame} />
              </FadeIn>
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
