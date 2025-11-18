import { PlayCircle, Users, Trophy } from 'lucide-react'

export const games = [
  {
    name: 'Juegos de Mesa',
    icon: Trophy,
    description: 'Estrategia, destreza y competencia',
  },
  {
    name: 'Actividades Colaborativas',
    icon: Users,
    description: 'Trabajo en equipo y comunicación',
  },
  {
    name: 'Desafíos Recreativos',
    icon: PlayCircle,
    description: 'Diversión y aprendizaje simultáneo',
  },
]

export const semesterHighlights = [
  { week: 'Semana 1-2', games_count: '5 juegos', focus: 'Integración' },
  { week: 'Semana 3-4', games_count: '7 juegos', focus: 'Liderazgo' },
  { week: 'Semana 5+', games_count: '+12 juegos', focus: 'Competencia' },
]
