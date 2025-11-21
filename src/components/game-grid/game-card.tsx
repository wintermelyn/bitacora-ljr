"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Package, Calendar, Zap, Flame, Gamepad2, Wind, ChevronRight } from "lucide-react"

interface Game {
  id: number
  title: string
  type: "warmup" | "main" | "cooldown"
  description: string
  materials: string[]
  intensity: string
  participants: string
  date: string
  rules?: string[]
  howToPlay?: string
  objectives?: string[]
}

const typeConfig = {
  warmup: {
    label: "Calentamiento",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    icon: Flame,
  },
  main: {
    label: "Juego Principal",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: Gamepad2,
  },
  cooldown: {
    label: "Vuelta a la Calma",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    icon: Wind,
  },
}

const intensityConfig = {
  "Muy Baja": { color: "text-emerald-600 dark:text-emerald-400", icon: Wind },
  Baja: { color: "text-blue-600 dark:text-blue-400", icon: Zap },
  Media: { color: "text-amber-600 dark:text-amber-400", icon: Flame },
  Alta: { color: "text-red-600 dark:text-red-400", icon: Flame },
}

export function GameCard({ game, onOpen }: { game: Game; onOpen: (game: Game) => void }) {
  const config = typeConfig[game.type]
  const TypeIcon = config.icon
  const intensityData = intensityConfig[game.intensity as keyof typeof intensityConfig]
  const IntensityIcon = intensityData.icon

  return (
    <Card
      onClick={() => onOpen(game)}
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:border-accent/50 relative"
    >
      <div className="p-6 relative z-10 group-hover:bg-secondary/30 transition-colors duration-300">
        <div className="flex items-start justify-between mb-4">
          <Badge className={config.color}>
            <TypeIcon className="w-3 h-3 mr-2" />
            {config.label}
          </Badge>
          <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {game.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{game.description}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <IntensityIcon className={`w-4 h-4 ${intensityData.color}`} />
            <span className={`text-sm font-medium ${intensityData.color}`}>Intensidad: {game.intensity}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{game.participants} participantes</span>
          </div>

          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{game.materials.join(", ")}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {new Date(game.date).toLocaleDateString("es-ES", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  )
}
