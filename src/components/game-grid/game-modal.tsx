"use client"
import Image from "next/image"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Package, Calendar, Flame, Gamepad2, Wind, BookOpen, Zap, Target } from "lucide-react"
import { Game, GameIntensity } from "@/types/game"

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
} satisfies Record<Game["type"], { label: string; color: string; icon: typeof Flame }>

const intensityColors: Record<GameIntensity, string> = {
  "Muy Baja": "text-emerald-600 dark:text-emerald-400",
  Baja: "text-blue-600 dark:text-blue-400",
  Media: "text-amber-600 dark:text-amber-400",
  Alta: "text-red-600 dark:text-red-400",
}

export function GameModal({
  game,
  open,
  onOpenChange,
}: {
  game: Game | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!game) return null

  const config = typeConfig[game.type]
  const TypeIcon = config.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* El modal completo es scrolleable dentro de 90vh */}
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-y-auto">
        {/* Header */}
        <div className="relative p-8 pb-6 bg-gradient-to-br from-accent/10 via-primary/5 to-background border-b">
          
          <DialogHeader className="space-y-3">
            <Badge className={`${config.color} w-fit text-xs font-semibold px-3 py-1.5`}>
              <TypeIcon className="w-3.5 h-3.5 mr-1.5" />
              {config.label}
            </Badge>
            <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {game.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              {game.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {game.image && (
          <div className="px-8 mt-4">
            <div className="w-full flex items-center justify-center max-h-[70vh]">
              <Image
                src={game.image}
                alt={game.title}
                width={1200}
                height={800}
                className="object-contain rounded-xl shadow-sm border w-auto h-auto max-h-[70vh]"
                priority
              />
            </div>
          </div>
        )}



        {/* Contenido */}
        <div className="p-8 space-y-10">
          {/* Información General */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Información General
            </h3>

            {/* 2 tarjetas por fila en pantallas medianas/grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Participantes</p>
                    <p className="text-base font-semibold text-foreground truncate">{game.participants}</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Flame className={`h-5 w-5 ${intensityColors[game.intensity] || "text-accent"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Intensidad</p>
                    <p
                      className={`text-base font-semibold truncate ${intensityColors[game.intensity] || "text-foreground"}`}
                    >
                      {game.intensity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Fecha</p>
                    <p className="text-base font-semibold text-foreground truncate">
                      {new Date(game.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Package className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Materiales</p>
                    <p className="text-base font-semibold text-foreground">{game.materials.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Materiales */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
              <Package className="w-5 h-5 text-accent" />
              Materiales Requeridos
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {game.materials.map((material) => (
                <Badge
                  key={material}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-border/50"
                >
                  {material}
                </Badge>
              ))}
            </div>
          </section>

          {/* Objetivos */}
          {game.objectives && game.objectives.length > 0 && (
            <section>
              <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Objetivos
              </h3>
              <ul className="space-y-3">
                {game.objectives.map((objective, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start group">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-colors mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed text-pretty flex-1">{objective}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Cómo jugar */}
          {game.howToPlay && (
            <section>
              <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Cómo Jugar
              </h3>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <p className="text-sm text-foreground leading-relaxed text-pretty">{game.howToPlay}</p>
              </div>
            </section>
          )}

          {/* Reglas */}
          {game.rules && game.rules.length > 0 && (
            <section>
              <h3 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Reglas del Juego
              </h3>
              <ol className="space-y-4">
                {game.rules.map((rule, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent group-hover:bg-accent/25 transition-colors">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed text-pretty flex-1 pt-0.5">{rule}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
