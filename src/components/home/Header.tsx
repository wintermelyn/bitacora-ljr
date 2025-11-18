'use client'

import Link from 'next/link'
import { PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <PlayCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">GameLog</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#juegos" className="text-sm hover:text-primary transition">
            Juegos
          </Link>
          <Link href="#semestre" className="text-sm hover:text-primary transition">
            Semestre
          </Link>
          <Link href="#acerca" className="text-sm hover:text-primary transition">
            Acerca de
          </Link>
        </nav>
        <Button variant="outline" size="sm">
          Acceder
        </Button>
      </div>
    </header>
  )
}
