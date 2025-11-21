"use client"

import { Flame, Zap, Wind, Gamepad2, AlertCircle, Droplet, Gauge, Rocket } from "lucide-react"

type GameType = "all" | "warmup" | "main" | "cooldown"
type IntensityFilter = "all" | "Muy Baja" | "Baja" | "Media" | "Alta"

interface GameFiltersProps {
  selectedType: GameType
  selectedIntensity: IntensityFilter
  onTypeChange: (type: GameType) => void
  onIntensityChange: (intensity: IntensityFilter) => void
}

const typeOptions = [
  {
    value: "all" as GameType,
    label: "Todos",
    icon: Gamepad2,
    description: "Ver todos los juegos",
  },
  {
    value: "warmup" as GameType,
    label: "Calentamiento",
    icon: Flame,
    description: "Juegos iniciales",
  },
  {
    value: "main" as GameType,
    label: "Principal",
    icon: Zap,
    description: "Actividades centrales",
  },
  {
    value: "cooldown" as GameType,
    label: "Vuelta a la Calma",
    icon: Wind,
    description: "Actividades de cierre",
  },
]

const intensityOptions = [
  {
    value: "all" as IntensityFilter,
    label: "Todas",
    icon: Gamepad2,
    color: "slate",
  },
  {
    value: "Muy Baja" as IntensityFilter,
    label: "Muy Baja",
    icon: Droplet,
    color: "emerald",
  },
  {
    value: "Baja" as IntensityFilter,
    label: "Baja",
    icon: AlertCircle,
    color: "blue",
  },
  {
    value: "Media" as IntensityFilter,
    label: "Media",
    icon: Gauge,
    color: "amber",
  },
  {
    value: "Alta" as IntensityFilter,
    label: "Alta",
    icon: Rocket,
    color: "red",
  },
]

const intensityColors = {
  "Muy Baja": "bg-emerald-50 border-emerald-200 text-emerald-700",
  Baja: "bg-blue-50 border-blue-200 text-blue-700",
  Media: "bg-amber-50 border-amber-200 text-amber-700",
  Alta: "bg-red-50 border-red-200 text-red-700",
  all: "bg-slate-50 border-slate-200 text-slate-700",
}

export function GameFilters({ selectedType, selectedIntensity, onTypeChange, onIntensityChange }: GameFiltersProps) {
  return (
    <div className="w-full space-y-8">
      {/* Filtro de Tipo de Juego */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Tipo de Juego</h3>
          <p className="text-sm text-muted-foreground">Selecciona la fase del juego que deseas ver</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {typeOptions.map((option) => {
            const Icon = option.icon
            const isSelected = selectedType === option.value
            return (
              <button
                key={option.value}
                onClick={() => onTypeChange(option.value)}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-accent bg-accent/5 shadow-lg shadow-accent/20"
                    : "border-border bg-card hover:border-accent/50 hover:bg-accent/2"
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <Icon
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isSelected ? "scale-110 text-accent" : "text-muted-foreground group-hover:text-accent"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isSelected ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {option.label}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Filtro de Intensidad */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Nivel de Intensidad</h3>
          <p className="text-sm text-muted-foreground">Filtra por el nivel de esfuerzo requerido</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {intensityOptions.map((option) => {
            const Icon = option.icon
            const isSelected = selectedIntensity === option.value
            const colorClass = intensityColors[option.value as keyof typeof intensityColors]
            return (
              <button
                key={option.value}
                onClick={() => onIntensityChange(option.value)}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? `${colorClass} border-current shadow-lg`
                    : `${colorClass} border-transparent hover:border-current/30`
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
