'use client'

import Link from 'next/link'
import { PlayCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <PlayCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              GameLog
            </h3>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#juegos" className="hover:text-foreground transition">
                  Juegos
                </Link>
              </li>
              <li>
                <Link href="#semestre" className="hover:text-foreground transition">
                  Semestre
                </Link>
              </li>
              <li>
                <Link href="#acerca" className="hover:text-foreground transition">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Guía de Juegos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contacto</h4>
            <p className="text-sm text-muted-foreground">Universidad</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 GameLog. Bitácora de Liderazgo y Recreación.</p>
        </div>
      </div>
    </footer>
  )
}
