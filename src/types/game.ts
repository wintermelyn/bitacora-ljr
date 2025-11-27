export type GameType = "warmup" | "main" | "cooldown"
export type GameTypeFilter = "all" | GameType

export type GameIntensity = "Muy Baja" | "Baja" | "Media" | "Alta"
export type IntensityFilter = "all" | GameIntensity

export type Game = {
  id: number
  title: string
  image?: string
  type: GameType
  description: string
  materials: string[]
  intensity: GameIntensity
  participants: string
  recommendedAge: number
  objectives?: string[]
  howToPlay?: string
  rules?: string[]
}
